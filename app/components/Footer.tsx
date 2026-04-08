import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="スタンドメイト" width={40} height={40} className="rounded-xl" />
            <span className="font-bold text-lg">スタンドメイト</span>
            <a href="https://x.com/StandMateapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors ml-2" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>

          <nav className="flex flex-wrap gap-6 justify-center text-sm">
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              ブログ
            </Link>
            <Link href="/howto" className="text-gray-400 hover:text-white transition-colors">
              使い方
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
              サポート・FAQ
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
              特定商取引法
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">© 2025 スタンドメイト. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
