import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート・FAQ",
  description:
    "スタンドメイトのよくある質問と回答、お問い合わせ方法をご案内します。",
  alternates: { canonical: "/support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "アカウントを削除したい",
      acceptedAnswer: {
        "@type": "Answer",
        text: "アプリを開いてマイページを開き、一番下の「アカウントを削除」を押すとアカウントを削除できます。",
      },
    },
    {
      "@type": "Question",
      name: "プレミアム会員の解約方法",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iOSの「設定」→「Apple ID」→「サブスクリプション」から「スタンドメイト」を選択し、「サブスクリプションをキャンセル」をタップしてください。",
      },
    },
    {
      "@type": "Question",
      name: "不適切なユーザーを見つけた",
      acceptedAnswer: {
        "@type": "Answer",
        text: "アプリ内の通報機能をご利用ください。プロフィール詳細画面の右上「…」メニューから「通報」を選択できます。通報内容は24時間以内に確認し、適切な対応を行います。",
      },
    },
    {
      "@type": "Question",
      name: "マッチングしたユーザーとメッセージができない",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インターネット接続が正常か確認し、アプリを最新バージョンにアップデートしてから再起動してください。それでも解決しない場合は、サポートまでお問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "購入の復元ができない",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マイページの「購入を復元」ボタンを押してください。それでも復元できない場合は、購入時のApple IDでログインしているかご確認ください。",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "サポート・FAQ", item: "https://standmate.jp/support" },
  ],
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">

        <h1>サポート</h1>

        {/* Contact */}
        <section>
          <h2>お問い合わせ</h2>
          <p>
            アプリに関するご質問、不具合の報告、ご要望などがございましたら、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <div className="info-box">
            <Link href="/contact" className="flex items-center gap-3 text-lg font-semibold">
              📝 お問い合わせフォームへ
            </Link>
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
      </div>
    </div>
  );
}
