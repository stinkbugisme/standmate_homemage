"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// スマホは見ている端末のストアへ直接、PCはホームのダウンロード欄へ
const APP_STORE = "https://apps.apple.com/jp/app/apple-store/id6753888706?pt=128208511&ct=header&mt=8";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=com.stinkbug.standmate&referrer=utm_source%3Dheader";

export default function Header() {
  const pathname = usePathname();
  const [downloadHref, setDownloadHref] = useState("/#download");

  useEffect(() => {
    const ua = navigator.userAgent;
    // iPadOS は Mac と同じ UA なのでタッチ対応で見分ける
    if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) setDownloadHref(APP_STORE);
    else if (/Android/.test(ua)) setDownloadHref(GOOGLE_PLAY);
  }, []);

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
          <a
            href={downloadHref}
            {...(downloadHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="cta-button cta-primary text-xs sm:text-sm !py-2 !px-3 sm:!px-5 whitespace-nowrap"
          >
            ダウンロード
          </a>
        </div>
      </div>
    </header>
  );
}
