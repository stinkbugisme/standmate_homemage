import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "記事",
  description:
    "野球観戦の楽しみ方、ファン同士の交流、球場ガイドなど、野球ファンに役立つ情報をお届けします。",
  alternates: { canonical: "/blog" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "記事", item: "https://standmate.jp/blog" },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">
        <h1>記事</h1>
        <p className="text-gray-500 mb-8">
          野球観戦の楽しみ方、ファン同士の交流、球場ガイドなど、野球ファンに役立つ情報をお届けします。
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
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
