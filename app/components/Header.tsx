"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="スタンドメイト" width={36} height={36} className="rounded-xl" />
          <span className="font-bold text-lg text-gray-900">スタンドメイト</span>
        </Link>
        <div className="flex items-center gap-4">
          {isHome && (
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex cta-button cta-primary text-sm !py-2 !px-5"
            >
              ダウンロード
            </a>
          )}
          {!isHome && (
            <Link href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
              ホームに戻る
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
