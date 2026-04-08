import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../posts";

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(<h3 key={i}>{line.slice(4)}</h3>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={i}>{line.slice(3)}</h2>);
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
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: renderInlineHtml(line) }} />);
    }
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  return <span dangerouslySetInnerHTML={{ __html: renderInlineHtml(text) }} />;
}

function renderInlineHtml(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
      { "@type": "ListItem", position: 2, name: "ブログ", item: "https://standmate.jp/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://standmate.jp/blog/${post.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
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
      <div className="subpage-container">
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
            ← 記事一覧に戻る
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <time className="text-xs text-gray-400">{post.date}</time>
        </div>

        <h1>{post.title}</h1>

        <article>{renderMarkdown(post.content)}</article>

        <div className="mt-12 p-8 bg-red-50 rounded-2xl text-center">
          <p className="font-bold text-lg text-gray-800 mb-2">野球仲間を見つけよう</p>
          <p className="text-gray-500 text-sm mb-6">
            スタンドメイトで同じ球団を応援する仲間と繋がろう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> App Store で公開中
            </a>
            <span className="cta-button cta-secondary cursor-default opacity-60">
              ▶ Google Play 近日公開予定
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
