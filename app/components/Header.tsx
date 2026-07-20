"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  // 記事詳細ページ(/blog/<slug>)は読みやすさ優先でヘッダーを非表示。
  // ホームへの導線は記事下部の固定バー＋「記事一覧に戻る」で確保している。
  // 記事一覧(/blog)やその他のページでは通常どおり表示する。
  if (/^\/blog\/[^/]+$/.test(pathname)) return null;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Image src="/icon.png" alt="スタンドメイト" width={36} height={36} className="rounded-xl flex-shrink-0" />
          <span className="font-bold text-base sm:text-lg text-gray-900 whitespace-nowrap">スタンドメイト</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <Link
            href="/"
            className="cta-button cta-primary text-xs sm:text-sm !py-2 !px-3 sm:!px-5 whitespace-nowrap"
          >
            ダウンロード
          </Link>
        </div>
      </div>
    </header>
  );
}
