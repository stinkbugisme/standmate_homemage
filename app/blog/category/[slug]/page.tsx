import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../posts";
import { categoryGroups, type CategoryGroupSlug } from "../../categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(categoryGroups).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = categoryGroups[slug as CategoryGroupSlug];
  if (!group) return {};
  return {
    title: group.metaTitle,
    description: group.metaDescription,
    alternates: { canonical: `/blog/category/${slug}` },
    openGraph: {
      title: group.metaTitle,
      description: group.metaDescription,
      type: "website",
      url: `https://standmate.jp/blog/category/${slug}`,
      siteName: "スタンドメイト",
      images: [{ url: "https://standmate.jp/icon.png", width: 512, height: 512, alt: "スタンドメイト" }],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const group = categoryGroups[slug as CategoryGroupSlug];
  if (!group) notFound();

  const filtered = posts
    .filter((p) => group.includes.includes(p.category))
    .sort((a, b) => b.date.localeCompare(a.date));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
      { "@type": "ListItem", position: 2, name: "記事", item: "https://standmate.jp/blog" },
      { "@type": "ListItem", position: 3, name: group.name, item: `https://standmate.jp/blog/category/${slug}` },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filtered.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://standmate.jp/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="subpage-container">
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
            ← 記事一覧に戻る
          </Link>
        </div>

        <h1>{group.name}</h1>
        <p className="text-gray-500 mb-6">{group.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/blog"
            className="px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200 !text-gray-600 hover:border-red-300 !no-underline transition-colors"
          >
            全て
          </Link>
          {Object.entries(categoryGroups).map(([s, g]) => (
            <Link
              key={s}
              href={`/blog/category/${s}`}
              className={`px-4 py-1.5 rounded-full text-sm font-bold border !no-underline transition-colors ${
                s === slug
                  ? "bg-red-500 !text-white border-red-500"
                  : "border-gray-200 !text-gray-600 hover:border-red-300"
              }`}
            >
              {g.shortName}
            </Link>
          ))}
        </div>

        <div className="grid gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-200 rounded-2xl p-6 hover:border-red-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <time className="text-xs text-gray-400">{post.date}</time>
              </div>
              <h2 className="!text-lg !font-bold !text-gray-900 !border-0 !pb-0 !mb-2">
                {post.title}
              </h2>
              <p className="!text-sm !text-gray-500 !mb-0">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
