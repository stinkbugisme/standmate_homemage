import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="subpage-container">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
            ← トップページに戻る
          </Link>
        </div>

        <h1>サポート</h1>

        {/* Contact */}
        <section>
          <h2>お問い合わせ</h2>
          <p>
            アプリに関するご質問、不具合の報告、ご要望などがございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
          </p>
          <div className="info-box flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <a href="mailto:support@standmate.app" className="text-lg font-semibold">
              support@standmate.app
            </a>
          </div>
          <p className="text-sm !text-gray-400">
            ※ 通常、24時間以内にご返信いたします。週末・祝日を挟む場合は、お時間をいただく場合がございます。
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2>よくある質問（FAQ）</h2>

          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-6 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">Q. アカウントを削除したい</h3>
              <p className="!mb-0">
                A. アプリを開いてマイページを開き、一番下の「アカウントを削除」を押すとアカウントを削除できます。
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">Q. プレミアム会員の解約方法</h3>
              <p className="!mb-0">
                A. iOSの「設定」→「Apple ID」→「サブスクリプション」から「スタンドメイト」を選択し、「サブスクリプションをキャンセル」をタップしてください。
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">Q. 不適切なユーザーを見つけた</h3>
              <p className="!mb-0">
                A. アプリ内の通報機能をご利用ください。プロフィール詳細画面の右上「…」メニューから「通報」を選択できます。通報内容は24時間以内に確認し、適切な対応を行います。
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">Q. マッチングしたユーザーとメッセージができない</h3>
              <p>A. 以下をご確認ください：</p>
              <ul className="list-disc">
                <li>インターネット接続が正常か確認</li>
                <li>アプリを最新バージョンにアップデート</li>
                <li>アプリを再起動</li>
              </ul>
              <p className="!mb-0">
                それでも解決しない場合は、サポートまでお問い合わせください。
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">Q. 購入の復元ができない</h3>
              <p className="!mb-0">
                A. マイページの「購入を復元」ボタンを押してください。それでも復元できない場合は、購入時のApple IDでログインしているかご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section>
          <h2>関連リンク</h2>
          <div className="flex flex-col gap-3">
            <Link href="/terms" className="border border-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-orange-200 hover:bg-orange-50/30 no-underline">
              📄 <span className="!text-gray-700">利用規約</span>
            </Link>
            <Link href="/privacy" className="border border-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-orange-200 hover:bg-orange-50/30 no-underline">
              🔒 <span className="!text-gray-700">プライバシーポリシー</span>
            </Link>
            <Link href="/legal" className="border border-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-orange-200 hover:bg-orange-50/30 no-underline">
              ⚖️ <span className="!text-gray-700">特定商取引法に基づく表記</span>
            </Link>
          </div>
        </section>

        <footer className="border-t border-gray-100 pt-8 mt-12 text-center">
          <p className="text-gray-400 text-sm">© 2025 スタンドメイト. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
