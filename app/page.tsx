import Image, { getImageProps } from 'next/image';
import { preload } from 'react-dom';
import Link from 'next/link';
import { posts } from './blog/posts';
import { FaqIcon, MailIcon } from './components/Icons';
import Phrase from './components/Phrase';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "スタンドメイト",
  alternateName: "StandMate",
  applicationCategory: "SocialNetworkingApplication",
  applicationSubCategory: "SportsApplication",
  operatingSystem: "iOS, Android",
  description:
    "基本無料の野球ファン向け友達・観戦仲間探しアプリ（有料プランは月額¥1,000）。プロ野球12球団・高校野球・大学野球・社会人野球・独立リーグ・日本代表まで対応。同じ球団を応援する仲間と一緒に球場へ行くためのアプリです。",
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
    "メッセージ（つながった後のチャット機能・写真や動画の送信）",
    "アプリ内通話（電話番号を教えずに音声通話）",
    "絞り込み検索（球団・年齢・性別・地域）",
    "通報・ブロック機能",
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

// ホームの「できること」。画像は public/features/feature-01〜08.webp(ストア写真 2.0.0 と同じ順番)
const FEATURES = [
  { title: "友達検索", text: "好きな球団が同じ人から順に表示。同じ推しの野球仲間が見つかります。", href: "/howto#search" },
  { title: "プロフィール", text: "好きな球団や住んでいる地域など、共通点がひと目でわかります。", href: "/howto#profile" },
  { title: "観戦募集", text: "一緒に球場へ行く仲間を募集。現地観戦のほか、通話で観戦や交流の募集もできます。", href: "/howto#watch", isNew: true },
  { title: "募集の詳細", text: "日時・球場・席をまとめて伝えられるので、気軽に誘えます。", href: "/howto#watch" },
  { title: "トーク", text: "マッチしたらメッセージで話せます。写真や動画も送り合えます。", href: "/howto#message" },
  { title: "アプリ内通話", text: "アプリの中で音声通話。電話番号を教えなくても話せます。", href: "/howto#call", isNew: true },
  { title: "絞り込み検索", text: "球団・年齢・性別・住んでいる地域で、相手を絞って探せます。", href: "/howto#search" },
  { title: "通報・ブロック", text: "気になる相手は通報・ブロックできるので、安心して使えます。", href: "/support" },
];

// 料金(アプリのプレミアム画面 PLANS と同じ)。1年プランは 2027/1/1 から
const PRICES = [
  { name: "無料", price: "¥0", note: "基本機能が使える" },
  { name: "1ヶ月プラン", price: "¥1,000", note: "/月（税込）", highlight: true },
  { name: "1年プラン", price: "¥10,000", note: "/年・2027年1月から", badge: "2ヶ月分おトク" },
];

// 1日に使える回数・時間(2026年の設定。2027/1/1 からの改定は表の下に注記)
const PLAN_ROWS: { label: string; free: string; premium: string; limited?: boolean }[] = [
  { label: "いいね・スキップ", free: "5回", premium: "30回" },
  { label: "行きたい！（観戦募集への参加）", free: "3回", premium: "20回" },
  { label: "音声通話", free: "60分", premium: "60分", limited: true },
  { label: "表示する性別を選ぶ", free: "—", premium: "◯" },
];

const SectionHeader = ({ en, title, lead }: { en: string; title: React.ReactNode; lead?: string }) => (
  <div className="text-center mb-8 md:mb-10 px-4">
    <p className="text-xs md:text-sm font-bold text-brand-500 tracking-[0.2em] uppercase mb-2">{en}</p>
    <h2 className="text-2xl md:text-4xl font-black text-gray-900">{title}</h2>
    {lead && <p className="text-sm text-gray-500 mt-3"><Phrase>{lead}</Phrase></p>}
  </div>
);

// 利用者数マイルストーン（節目ごとに更新：次は「3,000人以上」）。
// 達成型なので減らない数字だけを表示する方針。
const USER_COUNT_LABEL = "3,000人以上";

const BLANK_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

// ヒーローのアプリ画面(PC幅でだけ表示)。スマホで読み込まないよう、先読みは PC 幅のときだけにする
const { props: heroShot } = getImageProps({
  src: "/features/feature-01.webp",
  alt: "スタンドメイトの友達検索の画面 - 好きな球団が同じ人から順に表示",
  width: 600,
  height: 1304,
  sizes: "260px",
});

export default function Home() {
  preload(heroShot.src, {
    as: "image",
    imageSrcSet: heroShot.srcSet,
    imageSizes: heroShot.sizes,
    media: "(min-width: 768px)",
    fetchPriority: "high",
  });
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
      <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 bg-gradient-to-b from-brand-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <Image
                src="/icon.png"
                alt="スタンドメイト - 野球ファンの友達・観戦仲間探しアプリ"
                width={64}
                height={64}
                priority
                fetchPriority="high"
                sizes="64px"
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-md"
              />
              <span className="inline-flex items-center gap-1.5 bg-white border border-brand-100 text-gray-700 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                <BaseballIcon className="w-4 h-4 text-brand-500" />
                野球ファン<span className="text-brand-600">{USER_COUNT_LABEL}</span>が利用中
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight">
              <span className="gradient-text">スタンドメイト</span>
              <span className="sr-only">｜野球ファンの友達・観戦仲間探しアプリ</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-brand-900 mb-3">
              <Phrase>野球観戦仲間を探そう</Phrase>
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
              <Phrase>同じ球団のファン同士で、観戦仲間・野球友達を探す専用アプリです。基本無料（有料プランは月額¥1,000）。</Phrase>
            </p>
            <a
              href="#plans"
              className="!no-underline inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 text-xs md:text-sm font-bold pl-1.5 pr-3.5 py-1.5 rounded-full mb-7 hover:bg-amber-100 transition-colors"
            >
              <span className="bg-amber-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">12/31まで</span>
              <Phrase>無料会員も音声通話が1日60分</Phrase>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center">
            <a
              href="https://apps.apple.com/jp/app/apple-store/id6753888706?pt=128208511&ct=top&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate&referrer=utm_source%3Dtop"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-secondary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
            </a>
            </div>
          </div>

          <div className="hidden md:block">
            {/* スマホ幅では source が選ばれず、src の透明画像だけになるので通信しない */}
            <picture>
              <source media="(min-width: 768px)" srcSet={heroShot.srcSet} sizes={heroShot.sizes} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BLANK_GIF}
                alt={heroShot.alt}
                width={heroShot.width}
                height={heroShot.height}
                className="w-[260px] h-auto rounded-[2rem] shadow-2xl rotate-2"
              />
            </picture>
          </div>
        </div>

        {/* 対応カテゴリ */}
        <div className="max-w-5xl mx-auto mt-10 md:mt-14">
          <p className="text-center text-xs font-bold text-gray-400 tracking-widest mb-3">対応している野球</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {["プロ野球12球団", "高校野球", "大学野球", "社会人野球", "独立リーグ", "日本代表"].map((c) => (
              <li key={c} className="bg-white border border-brand-100 text-brand-900 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader en="Features" title={<>スタンドメイトで<span className="gradient-text">できること</span></>} />

          {/* スマホは横スクロール、PCは4列 */}
          <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 px-4 pb-4 md:pb-0 [scrollbar-width:none]">
            {FEATURES.map((f, i) => (
              <Link
                key={f.title}
                href={f.href}
                className="group block no-underline text-inherit snap-start shrink-0 w-[58%] sm:w-[40%] md:w-auto"
              >
                <div className="relative mb-3">
                  <Image
                    src={`/features/feature-${String(i + 1).padStart(2, "0")}.webp`}
                    alt={`スタンドメイトの${f.title}の画面 - ${f.text}`}
                    width={600}
                    height={1304}
                    loading="lazy"
                    sizes="(min-width: 768px) 240px, 58vw"
                    className="w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-shadow"
                  />
                  {f.isNew && (
                    <span className="absolute top-2 right-2 bg-white text-brand-600 text-[10px] md:text-xs font-black px-2 py-0.5 rounded-full shadow">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-sm md:text-base font-bold mb-1 group-hover:text-brand-500 transition-colors"><Phrase>{f.title}</Phrase></h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed"><Phrase>{f.text}</Phrase></p>
              </Link>
            ))}
          </div>
          <p className="md:hidden text-center text-xs text-gray-400 mt-2">← 横にスワイプで8つの機能 →</p>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Link
              href="/howto"
              className="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white font-bold py-2.5 px-7 rounded-full transition-colors text-sm"
            >
              使い方を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="scroll-mt-20 py-14 md:py-20 px-4 bg-brand-50/60">
        <div className="max-w-3xl mx-auto">
          <SectionHeader en="Plans" title="料金プラン" lead="基本機能はすべて無料。もっと使いたい人はプレミアムへ。" />

          {/* 年内限定: 無料会員の通話60分 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 p-5 md:p-7 mb-8 shadow-md">
            <p className="inline-block bg-white text-amber-700 text-xs md:text-sm font-black px-3 py-1 rounded-full mb-3">
              期間限定・2026年12月31日まで
            </p>
            <p className="text-xl md:text-3xl font-black leading-snug mb-3">
              <Phrase>無料会員も、音声通話が</Phrase>
              <span className="whitespace-nowrap">1日<span className="text-4xl md:text-6xl mx-1">60</span>分</span>
            </p>
            <p className="text-sm md:text-base font-bold leading-relaxed">
              <Phrase>いまはプレミアムと同じ時間を、無料のまま使えます。2027年1月1日からは、無料会員の通話は1日15分になります。</Phrase>
            </p>
            <div className="mt-4 inline-flex items-center gap-3 bg-white/80 rounded-xl px-4 py-2 text-sm font-bold">
              <span>いま <span className="text-lg font-black">60分</span></span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              <span className="text-amber-800/70">2027年から <span className="text-lg font-black">15分</span></span>
            </div>
          </div>

          {/* 料金 */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
            {PRICES.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-3 md:p-5 text-center ${p.highlight ? "bg-brand-900 text-white" : "bg-white border border-gray-200"}`}
              >
                {p.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-500 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full">
                    {p.badge}
                  </span>
                )}
                <p className={`text-xs md:text-sm font-bold mb-1 ${p.highlight ? "text-brand-200" : "text-gray-500"}`}>{p.name}</p>
                <p className="text-xl md:text-3xl font-black leading-tight">{p.price}</p>
                <p className={`text-[10px] md:text-xs mt-1 ${p.highlight ? "text-brand-200" : "text-gray-400"}`}><Phrase>{p.note}</Phrase></p>
              </div>
            ))}
          </div>

          {/* 1日に使える回数・時間の比較 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs">
                  <th className="text-left font-bold px-4 py-3">1日に使える</th>
                  <th className="font-bold px-2 py-3 w-[24%]">無料</th>
                  <th className="font-bold px-2 py-3 w-[24%] text-brand-600">プレミアム</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_ROWS.map((r) => (
                  <tr key={r.label} className={`border-t border-gray-100 ${r.limited ? "bg-amber-50" : ""}`}>
                    <td className="px-4 py-3 font-bold text-gray-700"><Phrase>{r.label}</Phrase></td>
                    <td className="px-2 py-3 text-center text-gray-600">
                      {r.limited ? (
                        <>
                          <span className="font-black text-amber-700">{r.free}</span>
                          <span className="block text-[10px] font-bold text-amber-700">12/31まで</span>
                        </>
                      ) : (
                        r.free
                      )}
                    </td>
                    <td className="px-2 py-3 text-center font-black text-brand-600">{r.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mt-4">
            <Phrase>※ 2027年1月1日から、無料は いいね・スキップ3回／行きたい！1回／通話15分、プレミアムは いいね・スキップ30回／行きたい！無制限／通話90分になります。</Phrase>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="scroll-mt-16 py-14 md:py-20 px-4 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/30 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Image src="/icon.png" alt="" width={72} height={72} sizes="72px" className="w-16 h-16 md:w-[72px] md:h-[72px] mx-auto mb-5 rounded-2xl shadow-lg" />
          <h2 className="text-2xl md:text-4xl font-black mb-3"><Phrase>さあ、野球仲間を見つけよう</Phrase></h2>
          <p className="text-brand-100 text-sm md:text-base mb-8">
            <Phrase>今すぐダウンロードして、同じ球団を応援する仲間と繋がろう。</Phrase>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://apps.apple.com/jp/app/apple-store/id6753888706?pt=128208511&ct=top&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary"
            >
              <AppleLogo className="w-5 h-5" /> App Store で公開中
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate&referrer=utm_source%3Dtop"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-secondary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader en="About" title={<>野球ファンが<span className="gradient-text">1人で</span>作っています</>} />
          <p className="text-gray-600 leading-relaxed mb-3">
            <Phrase>「一緒に観戦する仲間がほしい」——そんな想いから、野球好きの開発者が1人で開発し運営しています。</Phrase>
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            <Phrase>大きな会社ではありませんが、だからこそユーザーの声を大切にしながら、野球ファンのためのアプリを日々改善しています。ご意見・ご要望はいつでもお気軽にどうぞ！</Phrase>
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-14 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader en="Blog" title={<>最新の<span className="gradient-text">記事</span></>} />

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
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
                className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 no-underline text-inherit hover:border-brand-300 hover:shadow-lg transition-all group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-xs text-gray-400">{post.date}</time>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug group-hover:text-brand-500 transition-colors line-clamp-3">
                  <Phrase>{post.title}</Phrase>
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  <Phrase>{post.description}</Phrase>
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white font-bold py-2.5 px-7 rounded-full transition-colors text-sm"
            >
              記事一覧を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 md:py-20 px-4 bg-brand-50/60">
        <div className="max-w-3xl mx-auto">
          <SectionHeader en="Contact" title="お問い合わせ" lead="ご質問・不具合の報告・ご要望など、お気軽にどうぞ。" />
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              { href: "/support", icon: <FaqIcon className="w-6 h-6 text-white" />, title: "サポート・FAQ", text: "よくある質問をチェック" },
              { href: "/contact", icon: <MailIcon className="w-6 h-6 text-white" />, title: "フォームで問い合わせ", text: "お問い合わせフォームへ" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex items-center gap-4 bg-white border border-gray-200 hover:border-brand-300 hover:shadow-md rounded-2xl p-4 md:p-5 transition-all group no-underline"
              >
                <span className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">{c.icon}</span>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-0.5"><Phrase>{c.title}</Phrase></p>
                  <p className="text-gray-500 text-xs"><Phrase>{c.text}</Phrase></p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-500 ml-auto transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
