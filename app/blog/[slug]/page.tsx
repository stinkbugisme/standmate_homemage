import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, getTeamForSlug, getRelatedPostsByTeam, teams } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://standmate.jp/blog/${post.slug}`,
      siteName: "スタンドメイト",
      images: [{ url: "https://standmate.jp/icon.png", width: 512, height: 512, alt: "スタンドメイト" }],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let homeCtaText = "";

  const headingIds: Record<number, string> = {};
  const tocItems: { id: string; level: 2 | 3; text: string }[] = [];
  let h2Count = 0;
  let h3Count = 0;
  for (let idx = 0; idx < lines.length; idx++) {
    const ln = lines[idx];
    if (ln.startsWith("## ")) {
      h2Count++;
      h3Count = 0;
      const id = `section-${h2Count}`;
      headingIds[idx] = id;
      tocItems.push({ id, level: 2, text: ln.slice(3).trim() });
    } else if (ln.startsWith("### ")) {
      h3Count++;
      const id = `section-${h2Count}-${h3Count}`;
      headingIds[idx] = id;
      tocItems.push({ id, level: 3, text: ln.slice(4).trim().replace(/\*\*/g, "") });
    }
  }

  const h2HeadingCount = tocItems.filter((t) => t.level === 2).length;
  if (h2HeadingCount >= 3) {
    elements.push(
      <nav key="toc" className="my-6 p-5 rounded-2xl border border-gray-200 bg-gray-50 not-prose">
        <p className="text-sm font-bold text-gray-600 mb-3">目次</p>
        <ol className="space-y-1.5 list-none pl-0 m-0">
          {tocItems.map((item) => (
            <li
              key={item.id}
              className={item.level === 3 ? "ml-5 text-sm" : "text-sm font-bold mt-2 first:mt-0"}
            >
              <a
                href={`#${item.id}`}
                className={`toc-link hover:text-red-600 hover:underline no-underline ${item.level === 3 ? "text-gray-500" : "text-gray-900"}`}
              >
                {item.level === 2 && <span className="text-red-500 mr-1.5">▸</span>}
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  let i = 0;
  let faqMode = false;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      faqMode = false;
      elements.push(
        <h3
          key={i}
          id={headingIds[i]}
          style={{ scrollMarginTop: "1rem" }}
          dangerouslySetInnerHTML={{ __html: renderInlineHtml(line.slice(4)) }}
        />
      );
    } else if (line.startsWith("## ")) {
      faqMode = false;
      elements.push(
        <h2 key={i} id={headingIds[i]} style={{ scrollMarginTop: "1rem" }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim().startsWith("**Q")) {
      faqMode = true;
      elements.push(
        <p
          key={i}
          style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #eee", fontWeight: 700, color: "#1f2937" }}
          dangerouslySetInnerHTML={{ __html: renderInlineHtml(line) }}
        />
      );
    } else if (faqMode && line.trim().startsWith("A.")) {
      elements.push(
        <p
          key={i}
          style={{ margin: "0.4rem 0 1.5rem", paddingLeft: "0.9rem", borderLeft: "3px solid #fca5a5", color: "#4b5563" }}
          dangerouslySetInnerHTML={{ __html: renderInlineHtml(line) }}
        />
      );
    } else if (line.startsWith("|")) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].split("|").slice(1, -1).map((c) => c.trim());
        tableRows.push(cells);
        i++;
      }
      // Skip separator row (e.g. |---|---|)
      const header = tableRows[0];
      const body = tableRows.filter((_, idx) => idx >= 1).filter((row) => !row.every((cell) => /^[-\s]+$/.test(cell)));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto mb-4" style={{ WebkitOverflowScrolling: "touch" }}>
          <table>
            <thead>
              <tr>
                {header.map((cell, j) => (
                  <td key={j} style={{ fontWeight: 700, background: "#f9fafb" }} dangerouslySetInnerHTML={{ __html: renderInlineHtml(cell) }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} dangerouslySetInnerHTML={{ __html: renderInlineHtml(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim().startsWith("{{map:") && line.trim().endsWith("}}")) {
      const raw = line.trim().slice("{{map:".length, -"}}".length);
      const rawParts = raw.split("|");
      const mapQuery = rawParts[0].trim();
      const mapLabel = (rawParts[1] || rawParts[0]).trim();
      const mapEnc = encodeURIComponent(mapQuery);
      const mapAddr = (rawParts[2] || "").trim();
      const mapHours = (rawParts[3] || "").trim();
      // 埋め込み地図のピンを必ず1つにするため、番地住所"だけ"で引く。
      // 番地までの住所は1点にジオコーディングされるが、店名を混ぜると「検索」扱いになり
      // 類似店舗が複数ピンで出ることがあるため、店名は入れない（店名検索は下部リンク側で担保）。
      // 建物名/階・注記(※)は番地以降を切り捨てて除去する。
      const streetAddr = mapAddr
        .replace(/\s*※.*$/, "")
        .replace(/([\d丁目番号])\s+.*$/, "$1")
        .trim();
      const cleanName = mapLabel.replace(/[（(][^）)]*[）)]/g, "").trim();
      const mapPin = streetAddr || cleanName || mapQuery;
      const mapPinEnc = encodeURIComponent(mapPin);
      elements.push(
        <div key={`map-${i}`} className="my-4">
          <p style={{ fontWeight: 700, color: "#1f2937", fontSize: "1rem", margin: "0 0 0.2rem" }}>{mapLabel}</p>
          {mapAddr && (
            <p style={{ fontSize: "0.83rem", color: "#4b5563", margin: "0.1rem 0" }}>
              <span style={{ fontWeight: 600 }}>住所：</span>{mapAddr}
            </p>
          )}
          {mapHours && (
            <p style={{ fontSize: "0.83rem", color: "#4b5563", margin: "0.1rem 0" }}>
              <span style={{ fontWeight: 600 }}>営業時間：</span>{mapHours}
            </p>
          )}
          <iframe
            title={mapLabel}
            src={`https://maps.google.com/maps?q=${mapPinEnc}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: 220, border: 0, borderRadius: 10, display: "block", marginTop: "0.45rem" }}
          />
          <p style={{ fontSize: "0.72rem", color: "#9ca3af", margin: "0.25rem 0 0" }}>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapEnc}`} target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af" }}>
              Googleマップで最新の営業時間・口コミを見る →
            </a>
          </p>
        </div>
      );
    } else if (line.trim() === "{{cta-standmate}}") {
      // skip — bottom-of-page CTA already shows download buttons
    } else if (line.trim() === "{{install-cta}}") {
      elements.push(
        <div key={i} className="my-6 p-5 bg-red-50 rounded-2xl text-center">
          <p className="font-bold text-gray-800 mb-1">
            <img src="/icon-baseball.svg" alt="" width={22} height={22} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 8, marginTop: -2 }} />
            スタンドメイトを無料インストール
          </p>
          <p className="text-gray-500 text-sm mb-4">野球観戦の同行者を探そう（iOS / Android 対応）</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {/* 本文中CTA。最下部CTAとクリックを区別して計測するため識別パラメータを付与している */}
            <a
              href="https://apps.apple.com/jp/app/id6753888706?ct=blog-inline"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate&referrer=utm_source%3Dblog"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-secondary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play
            </a>
          </div>
        </div>
      );
    } else if (line.trim().startsWith("{{home-cta:") && line.trim().endsWith("}}")) {
      // 記事ごとの短い誘導フレーズ(見出し)を捕捉。実表示は画面下部の固定バー(下記)で行う
      const inner = line.trim().slice("{{home-cta:".length, -"}}".length);
      const sep = inner.indexOf("|");
      homeCtaText = (sep >= 0 ? inner.slice(0, sep) : inner).replace(/\*\*/g, "").trim();
    } else if (line.trim().startsWith("{{cards:") && line.trim().endsWith("}}")) {
      const slugs = line
        .trim()
        .slice("{{cards:".length, -"}}".length)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const cardPosts = slugs.map((s) => getPost(s)).filter((p): p is NonNullable<ReturnType<typeof getPost>> => !!p);
      if (cardPosts.length > 0) {
        elements.push(
          <div key={`cards-${i}`} className="my-6">
            <p className="text-sm font-bold text-gray-500 mb-3">関連記事</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cardPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-red-300 transition-all no-underline"
                >
                  <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 bg-red-50 text-red-600">
                    {p.category}
                  </span>
                  <p className="font-bold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        );
      }
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: renderInlineHtml(line) }} />);
    }
    i++;
  }

  return { elements, homeCtaText };
}

function renderInline(text: string): React.ReactNode {
  return <span dangerouslySetInnerHTML={{ __html: renderInlineHtml(text) }} />;
}

function renderInlineHtml(text: string): string {
  return text
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="display:inline-block;width:28px;height:28px;border-radius:6px;vertical-align:middle;margin-right:6px" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return `<a href="${href}" style="color:#dc2626;text-decoration:underline;text-underline-offset:2px">${label}</a>`;
      }
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { elements: contentElements, homeCtaText } = renderMarkdown(post.content);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
      { "@type": "ListItem", position: 2, name: "記事", item: "https://standmate.jp/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://standmate.jp/blog/${post.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    author: { "@type": "Organization", name: "スタンドメイト" },
    publisher: {
      "@type": "Organization",
      name: "スタンドメイト",
      logo: { "@type": "ImageObject", url: "https://standmate.jp/icon.png" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="subpage-container blog-article">

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <time className="text-xs text-gray-400">公開：{post.date}</time>
          {post.updatedDate && post.updatedDate !== post.date && (
            <time className="text-xs text-green-600 font-medium">最終更新：{post.updatedDate}</time>
          )}
        </div>

        <h1>{post.title}</h1>

        <article>{contentElements}</article>

        {(() => {
          const teamId = getTeamForSlug(post.slug);
          if (!teamId) return null;
          const team = teams[teamId];
          const related = getRelatedPostsByTeam(teamId, post.slug);
          return (
            <>
              <div className="mt-12">
                <h2 className="text-lg font-bold text-gray-800 mb-4">公式サイト</h2>
                <a
                  href={team.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow no-underline"
                  style={{ borderLeft: `6px solid ${team.accent}` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{team.shortName} 公式サイト</p>
                      <p className="font-bold text-gray-800 mb-1">{team.name}</p>
                      <p className="text-xs text-gray-500 break-all">{team.officialUrl}</p>
                    </div>
                    <span className="text-gray-400 text-xl shrink-0">↗</span>
                  </div>
                </a>
              </div>

              {related.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">{team.shortName}の関連記事</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {related.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow no-underline"
                      >
                        <span
                          className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2"
                          style={{ background: `${team.accent}1a`, color: team.accent }}
                        >
                          {p.category}
                        </span>
                        <p className="font-bold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          );
        })()}

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
            ← 記事一覧に戻る
          </Link>
        </div>
      </div>

      {/* 画面下部に常時固定のCTAバー。ロゴ＋アプリ名＋記事ごとの一言＋トップページへのボタン(?ct=blog-footerで計測) */}
      <div style={{ height: "100px" }} aria-hidden />
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          background: "#ffffff",
          borderTop: "1px solid #f0d5d5",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
          padding: "12px 16px",
          paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/icon.png" alt="スタンドメイト" width={44} height={44} className="rounded-xl flex-shrink-0" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="sticky-cta-name">スタンドメイト</p>
            <p className="sticky-cta-text">{homeCtaText || "野球観戦の仲間、見つけよう"}</p>
          </div>
          <a href="/?ct=blog-footer" className="cta-button cta-primary sticky-cta-btn">
            探してみる →
          </a>
        </div>
      </div>
    </div>
  );
}
