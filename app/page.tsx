import Image from 'next/image';
import Link from 'next/link';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "スタンドメイト",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "iOS",
  description:
    "野球ファン同士が繋がる、友達検索＆観戦マッチングアプリ。同じ球団を応援する仲間を見つけて、一緒に球場に行こう！",
  url: "https://standmate.jp",
  image: "https://standmate.jp/icon.png",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      name: "無料プラン",
    },
    {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "JPY",
      name: "プレミアムプラン",
    },
  ],
  installUrl:
    "https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706",
  aggregateRating: undefined,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "スタンドメイト",
  url: "https://standmate.jp",
  logo: "https://standmate.jp/icon.png",
  email: "support@standmate.app",
};

const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 bg-gradient-to-b from-red-50/80 via-orange-50/40 to-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="animate-fade-in-up mb-3">
            <div className="animate-float inline-block">
              <Image
                src="/icon.png"
                alt="スタンドメイト"
                width={128}
                height={128}
                priority
                className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-6xl font-black mb-2 tracking-tight">
            <span className="gradient-text">スタンドメイト</span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-base md:text-xl text-gray-500 mb-1">
            野球ファン同士が繋がる
          </p>
          <p className="animate-fade-in-up delay-200 text-lg md:text-2xl font-bold text-gray-700 mb-6">
            友達検索＆観戦マッチングアプリ
          </p>

          {/* Download buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-0">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary text-lg"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <span className="cta-button cta-secondary text-lg cursor-default opacity-60">
              ▶ Google Play 近日公開予定
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-3 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="stat-card">
              <p className="text-xl md:text-3xl font-black gradient-text mb-1 whitespace-nowrap">12球団</p>
              <p className="text-xs text-gray-500 font-medium">プロ野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl mb-1">⚾</p>
              <p className="text-xs text-gray-500 font-medium">高校野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🎓</p>
              <p className="text-xs text-gray-500 font-medium">大学野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🏢</p>
              <p className="text-xs text-gray-500 font-medium">社会人野球</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🌟</p>
              <p className="text-xs text-gray-500 font-medium">独立リーグ</p>
            </div>
            <div className="stat-card">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">🇯🇵</p>
              <p className="text-xs text-gray-500 font-medium">日本代表</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Features</p>
            <h2 className="text-3xl md:text-4xl font-black">
              スタンドメイトの<span className="gradient-text">3つの機能</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Link href="/howto#search" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/IMG_3479.PNG"
                  alt="スタンドメイトの友達検索画面 - 同じ球団を応援する仲間をスワイプで探せる"
                  width={192}
                  height={416}
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">友達検索</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                同じ球団を応援する仲間を見つけよう。プロフィールをスワイプして、気の合う野球ファンとマッチング。
              </p>
            </Link>

            <Link href="/howto#watch" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/IMG_3480.PNG"
                  alt="スタンドメイトの観戦募集画面 - 一緒に球場に行く仲間を募集できる"
                  width={192}
                  height={416}
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">観戦募集</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                一緒に球場に行く仲間を募集できる。「一人で観戦」がなくなる、新しい野球体験。
              </p>
            </Link>

            <Link href="/howto#message" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/IMG_3482.PNG"
                  alt="スタンドメイトのメッセージ画面 - マッチング後にチャットで交流"
                  width={192}
                  height={416}
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">メッセージ</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                マッチング後はチャットで気軽に交流。観戦の待ち合わせもスムーズに。
              </p>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/howto"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
            >
              使い方を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Plans</p>
            <h2 className="text-3xl md:text-4xl font-black">料金プラン</h2>
          </div>

          {/* Free Plan */}
          <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider">
              FREE
            </span>
            <h2 className="text-2xl md:text-3xl font-black mb-3">無料プラン</h2>
            <p className="text-gray-500 mb-8 max-w-xl">
              基本機能はすべて無料。まずは気軽に始めてみよう。
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black gradient-text">¥0</span>
              <span className="text-gray-400">/月</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                いいね＆スキップ 5回/日
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                観戦募集参加 3回/日
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                メッセージ機能
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs flex-shrink-0">✓</span>
                観戦募集の作成
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider">
                PREMIUM
              </span>
              <h2 className="text-2xl md:text-3xl font-black mb-3">もっと楽しむなら</h2>
              <p className="text-gray-400 mb-8 max-w-xl">
                プレミアム会員で、いいね回数UP・観戦募集の参加枠UP・表示設定など充実の機能が使えます。
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black">¥1,000</span>
                <span className="text-gray-400">/月（税込）</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs flex-shrink-0">✓</span>
                  いいね＆スキップ 30回/日
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs flex-shrink-0">✓</span>
                  観戦募集参加 20回/日
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs flex-shrink-0">✓</span>
                  プロフィール表示設定
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            さあ、<span className="gradient-text">野球仲間</span>を見つけよう
          </h2>
          <p className="text-gray-500 mb-10">
            今すぐダウンロードして、同じ球団を応援する仲間と繋がろう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary text-lg"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <span className="cta-button cta-secondary text-lg cursor-default opacity-60">
              ▶ Google Play 近日公開予定
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">お問い合わせ</h2>
          <p className="text-gray-500 mb-8">
            ご質問やサポートが必要な場合は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/support"
              className="cta-button bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
            >
              📧 サポートページ
            </Link>
            <a
              href="mailto:support@standmate.app"
              className="text-red-500 hover:text-red-600 font-semibold transition-colors"
            >
              support@standmate.app →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
