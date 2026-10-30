import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";
import { categoryGroups } from "./categories";
import Phrase from "../components/Phrase";

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
        <p className="text-gray-500 mb-6">
          野球観戦の楽しみ方、ファン同士の交流、球場ガイドなど、野球ファンに役立つ情報をお届けします。
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-brand-500 text-white border border-brand-500">
            全て
          </span>
          {Object.entries(categoryGroups).map(([s, g]) => (
            <Link
              key={s}
              href={`/blog/category/${s}`}
              className="px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200 !text-gray-600 hover:border-brand-300 !no-underline transition-colors"
            >
              {g.shortName}
            </Link>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[...posts]
            .sort((a, b) => {
              if (a.slug === "standmate-tanjou-story") return -1;
              if (b.slug === "standmate-tanjou-story") return 1;
              return b.date.localeCompare(a.date);
            })
            .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-gray-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all !no-underline"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <time className="text-xs text-gray-400">{post.date}</time>
                {post.updatedDate && <span className="text-xs text-gray-400">更新 {post.updatedDate}</span>}
              </div>
              <h2 className="!text-base md:!text-lg !font-bold !text-gray-900 group-hover:!text-brand-600 !border-0 !pb-0 !mb-2 !leading-snug transition-colors">
                <Phrase>{post.title}</Phrase>
              </h2>
              <p className="!text-sm !text-gray-500 !mb-0 !leading-relaxed line-clamp-2"><Phrase>{post.description}</Phrase></p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
