import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./blog/posts";
import Phrase from "./components/Phrase";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false },
};

const LINKS = [
  { href: "/", label: "トップページ", text: "スタンドメイトでできること・料金プラン" },
  { href: "/howto", label: "使い方", text: "登録から観戦募集・通話までの流れ" },
  { href: "/blog", label: "ブログ", text: "観戦ガイド・球場ガイド・ファンクラブ情報" },
  { href: "/support", label: "サポート・よくある質問", text: "困ったときの解決方法" },
];

// 最近更新した記事(URL が変わった記事を探している人向け)
const recentPosts = [...posts]
  .sort((a, b) => (b.updatedDate ?? b.date).localeCompare(a.updatedDate ?? a.date))
  .slice(0, 4);

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white pt-28 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-6xl md:text-7xl font-black gradient-text mb-3">404</p>
          <h1 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
            <Phrase>お探しのページが見つかりませんでした</Phrase>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            <Phrase>URLが間違っているか、ページが移動・削除された可能性があります。下のリンクから目的のページを探してみてください。</Phrase>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="!no-underline group bg-white border border-gray-200 hover:border-brand-300 rounded-2xl p-4 transition-colors"
            >
              <p className="font-bold text-gray-900 group-hover:text-brand-600 mb-1">
                <Phrase>{l.label}</Phrase>
              </p>
              <p className="text-xs text-gray-500">
                <Phrase>{l.text}</Phrase>
              </p>
            </Link>
          ))}
        </div>

        <h2 className="text-sm font-bold text-gray-500 mb-3">最近更新した記事</h2>
        <ul className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
          {recentPosts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="!no-underline block px-4 py-3 text-sm text-gray-700 hover:text-brand-600">
                <Phrase>{p.title}</Phrase>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
