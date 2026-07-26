import Image from 'next/image';
import Link from 'next/link';
import { posts } from './blog/posts';
import { FaqIcon, MailIcon } from './components/Icons';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "スタンドメイト",
  alternateName: "StandMate",
  applicationCategory: "SocialNetworkingApplication",
  applicationSubCategory: "SportsApplication",
  operatingSystem: "iOS, Android",
  description:
    "基本無料の野球ファン向け友達・観戦仲間探しアプリ（有料プランは月額¥1,000）。プロ野球12球団・高校野球・大学野球・社会人野球・独立リーグ・日本代表まで対応。恋愛マッチングアプリではなく、同じ球団を応援する仲間と一緒に球場へ行くためのアプリです。",
  url: "https://standmate.jp",
  image: "https://standmate.jp/icon.png",
  inLanguage: "ja-JP",
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
  featureList: [
    "友達検索（同じ球団を応援するファンをスワイプで探して仲間探し）",
    "観戦募集（一緒に球場へ行く仲間の募集・参加）",
    "メッセージ（つながった後のチャット機能）",
    "プロ野球12球団・高校野球・大学野球・社会人野球・独立リーグ・日本代表対応",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "スタンドメイト",
  url: "https://standmate.jp",
  inLanguage: "ja-JP",
  publisher: {
    "@type": "Organization",
    name: "スタンドメイト",
    url: "https://standmate.jp",
    logo: "https://standmate.jp/icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "スタンドメイト",
  url: "https://standmate.jp",
  logo: "https://standmate.jp/icon.png",
  email: "info@standmate.jp",
};

const BaseballIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256,0C114.607,0.009,0.012,114.602,0,256.004C0.012,397.389,114.607,511.991,256,512c141.393-0.009,255.987-114.611,256-255.996C511.987,114.602,397.393,0.009,256,0z M411.761,411.761C371.84,451.651,316.885,476.27,256,476.279c-60.886-0.009-115.841-24.628-155.761-64.518c-0.27-0.271-0.523-0.558-0.794-0.829c4.444-2.093,8.817-4.299,13.038-6.742c6.401-3.706,8.586-11.904,4.875-18.305c-3.707-6.401-11.905-8.581-18.306-4.875c-5.704,3.306-11.656,6.236-17.818,8.748c-0.052,0.018-0.096,0.052-0.144,0.078c-28.448-37.116-45.362-83.425-45.37-133.832c0.008-60.89,24.628-115.85,64.518-155.766C140.159,60.349,195.114,35.73,256,35.721c60.885,0.009,115.84,24.628,155.761,64.518c0.27,0.271,0.522,0.558,0.793,0.829c-4.556,2.145-9.044,4.404-13.365,6.924c-6.392,3.724-8.56,11.921-4.836,18.322c3.724,6.384,11.926,8.547,18.319,4.831c5.695-3.313,11.638-6.261,17.796-8.782c0.152-0.061,0.274-0.156,0.422-0.226c28.462,37.116,45.38,83.442,45.389,133.867C476.27,316.886,451.65,371.836,411.761,411.761z"/>
    <path d="M170.172,323.243c-6.406-3.698-14.598-1.509-18.301,4.892c-3.328,5.756-7.038,11.268-11.107,16.483c-4.543,5.843-3.497,14.25,2.342,18.803c5.834,4.544,14.25,3.497,18.798-2.337c4.814-6.192,9.219-12.715,13.165-19.535C178.771,335.138,176.578,326.949,170.172,323.243z"/>
    <path d="M131.425,120.541c-6.201-4.796-12.742-9.174-19.579-13.099c-6.419-3.688-14.604-1.464-18.288,4.954c-3.68,6.419-1.461,14.599,4.958,18.28c5.764,3.314,11.285,7.012,16.517,11.058c5.852,4.518,14.264,3.444,18.79-2.407C138.349,133.484,137.276,125.068,131.425,120.541z"/>
    <path d="M160.361,201.114c2.816,6.837,10.644,10.107,17.486,7.291c6.841-2.817,10.103-10.64,7.29-17.486c-3.004-7.3-6.497-14.354-10.438-21.105c-3.733-6.384-11.935-8.546-18.323-4.814c-6.388,3.732-8.546,11.93-4.814,18.322C154.884,189.018,157.832,194.958,160.361,201.114z"/>
    <path d="M184.496,241.912c-7.4,0.026-13.368,6.052-13.338,13.456v0.628c0,6.732-0.463,13.36-1.352,19.832c-1.003,7.325,4.12,14.093,11.45,15.096c7.33,1.004,14.089-4.125,15.092-11.45c1.055-7.683,1.6-15.524,1.6-23.477v-0.75C197.914,247.85,191.891,241.877,184.496,241.912z"/>
    <path d="M340.838,256.318v-0.322c0-6.628,0.445-13.134,1.308-19.517c0.99-7.326-4.151-14.076-11.485-15.07c-7.33-0.986-14.076,4.151-15.066,11.485c-1.021,7.562-1.548,15.271-1.548,23.102v0.384c0.017,7.395,6.026,13.378,13.426,13.36C334.868,269.722,340.855,263.722,340.838,256.318z"/>
    <path d="M351.516,310.598c-2.8-6.846-10.622-10.134-17.473-7.334c-6.846,2.8-10.13,10.622-7.33,17.468c2.992,7.318,6.466,14.364,10.396,21.131c3.715,6.393,11.913,8.564,18.31,4.849c6.397-3.715,8.572-11.913,4.857-18.314C356.962,322.702,354.032,316.754,351.516,310.598z"/>
    <path d="M413.209,381.159v0.009c-5.761-3.323-11.272-7.029-16.496-11.093c-5.843-4.535-14.254-3.479-18.794,2.364c-4.539,5.834-3.484,14.25,2.355,18.794c6.191,4.806,12.719,9.2,19.552,13.142c6.41,3.698,14.599,1.491,18.297-4.918C421.816,393.055,419.618,384.857,413.209,381.159z"/>
    <path d="M368.658,148.832c-5.848-4.535-14.264-3.462-18.794,2.381c-4.805,6.201-9.192,12.733-13.12,19.561c-3.694,6.419-1.483,14.599,4.931,18.297c6.41,3.689,14.599,1.482,18.288-4.937c3.318-5.764,7.02-11.276,11.071-16.508C375.568,161.783,374.5,153.367,368.658,148.832z"/>
  </svg>
);


const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

// 利用者数マイルストーン（節目ごとに更新：次は「3,000人以上」）。
// 達成型なので減らない数字だけを表示する方針。
const USER_COUNT_LABEL = "2,000人以上";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 bg-gradient-to-b from-red-50/80 via-orange-50/40 to-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-3">
            <div className="inline-block">
              <Image
                src="/icon.png"
                alt="スタンドメイト - 野球ファンの友達・観戦仲間探しアプリ"
                width={128}
                height={128}
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 128px, 112px"
                className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
            <span className="gradient-text">スタンドメイト</span>
            <span className="sr-only">｜野球ファンの友達・観戦仲間探しアプリ</span>
          </h1>

          <p className="text-base md:text-xl text-gray-500 mb-1">
            野球ファン同士が繋がる
          </p>
          <p className="text-lg md:text-2xl font-bold text-gray-700 mb-2">
            スタンドメイト - 野球観戦仲間を探そう
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-5">
            恋愛マッチングアプリではありません。同じ球団のファン同士で観戦仲間・野球友達を探す専用アプリです（基本無料・有料プランは月額¥1,000）。
          </p>

          {/* 利用者数バッジ（社会的証明） */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-red-100 text-gray-700 text-sm md:text-base font-bold px-5 py-2 rounded-full shadow-sm">
              <BaseballIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
              野球ファン<span className="gradient-text">{USER_COUNT_LABEL}</span>が利用中
            </span>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary text-lg"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-secondary text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
            </a>
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
                  src="/screenshot-home.png"
                  alt="スタンドメイトの友達検索画面 - 同じ球団を応援する仲間をスワイプで探せる"
                  width={192}
                  height={416}
                  loading="lazy"
                  quality={75}
                  sizes="192px"
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">友達検索</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                同じ球団を応援する仲間を見つけよう。プロフィールをスワイプして、気の合う野球ファンと仲間探し。
              </p>
            </Link>

            <Link href="/howto#watch" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/screenshot-watch-search.png"
                  alt="スタンドメイトの観戦募集画面 - 一緒に球場に行く仲間を募集できる"
                  width={192}
                  height={416}
                  loading="lazy"
                  quality={75}
                  sizes="192px"
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">観戦募集</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                一緒に球場に行く仲間を募集したり、他の人の募集に参加できる。チケットの譲り先探しや、同じ球団のファン同士での飲み会の企画など使い方はいろいろ。
              </p>
            </Link>

            <Link href="/howto#message" className="feature-card text-center block no-underline text-inherit hover:scale-[1.02] transition-transform">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/screenshot-message.png"
                  alt="スタンドメイトのメッセージ画面 - つながった後にチャットで交流"
                  width={192}
                  height={416}
                  loading="lazy"
                  quality={75}
                  sizes="192px"
                  className="w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">メッセージ</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                つながった後はチャットで気軽に交流。観戦の待ち合わせもスムーズに。
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
            <a
              href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-secondary text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">About</p>
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
              <BaseballIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            野球ファンが<span className="gradient-text">1人で</span>作っています
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            「一緒に観戦する仲間がほしい」——そんな想いから、野球好きの開発者が1人で開発し運営しています。
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            大きな会社ではありませんが、だからこそユーザーの声を大切にしながら、野球ファンのためのアプリを日々改善しています。ご意見・ご要望はいつでもお気軽にどうぞ！
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Blog</p>
            <h2 className="text-3xl md:text-4xl font-black">
              最新の<span className="gradient-text">記事</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(() => {
              const pinnedSlug = "standmate-tanjou-story";
              const pinned = posts.find((p) => p.slug === pinnedSlug);
              const rest = [...posts]
                .filter((p) => p.slug !== pinnedSlug)
                .sort((a, b) => b.date.localeCompare(a.date))
                .slice(0, pinned ? 2 : 3);
              return (pinned ? [pinned, ...rest] : rest);
            })().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-200 rounded-2xl p-6 no-underline text-inherit hover:border-red-300 hover:shadow-lg transition-all group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-xs text-gray-400">{post.date}</time>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug group-hover:text-red-500 transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
            >
              記事一覧を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Contact</p>
            <h2 className="text-2xl md:text-3xl font-black">お問い合わせ</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-gray-400 mb-8 text-center">
                ご質問・不具合の報告・ご要望など、お気軽にお問い合わせください。
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/support"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 rounded-2xl p-5 transition-all group no-underline"
                >
                  <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaqIcon className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">サポート・FAQ</p>
                    <p className="text-gray-400 text-xs">よくある質問をチェック</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 rounded-2xl p-5 transition-all group no-underline"
                >
                  <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">フォームで問い合わせ</p>
                    <p className="text-gray-400 text-xs">お問い合わせフォームへ</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
