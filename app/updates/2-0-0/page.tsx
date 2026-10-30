import type { Metadata } from "next";
import Image from "next/image";
import Phrase from "../../components/Phrase";

// アプリのお知らせ(announcements の link_url)から開くページ
export const metadata: Metadata = {
  title: "バージョン2.0.0の新しい機能",
  description:
    "スタンドメイト 2.0.0 で、トークで写真・動画が送れるようになり、アプリ内で通話もできるようになりました。自己紹介が必要になった点や、アップデートのしかたもまとめています。",
  alternates: { canonical: "/updates/2-0-0" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "バージョン2.0.0の新しい機能", item: "https://standmate.jp/updates/2-0-0" },
  ],
};

// ストア画像(public/features/feature-NN.webp)
const Shot = ({ n, alt }: { n: number; alt: string }) => (
  <figure className="w-[150px] sm:w-[180px] md:w-[200px] shrink-0">
    <Image
      src={`/features/feature-${String(n).padStart(2, "0")}.webp`}
      alt={alt}
      width={600}
      height={1304}
      loading="lazy"
      sizes="(min-width: 768px) 200px, 160px"
      className="w-full h-auto rounded-2xl shadow-md"
    />
  </figure>
);

const Section = ({ id, title, children, shot }: {
  id: string;
  title: string;
  children: React.ReactNode;
  shot?: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 py-10 md:py-14 border-t border-gray-100 first:border-t-0">
    <div className={shot ? "md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-start" : ""}>
      <div>
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4"><Phrase>{title}</Phrase></h2>
        <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">{children}</div>
      </div>
      {shot && <div className="flex justify-center gap-4 mt-6 md:mt-0">{shot}</div>}
    </div>
  </section>
);


const StoreButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center">
    <a
      href="https://apps.apple.com/jp/app/apple-store/id6753888706?pt=128208511&ct=update200&mt=8"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button cta-primary"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> App Store でアップデート
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate&referrer=utm_source%3Dupdate200"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button cta-secondary"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play でアップデート
    </a>
  </div>
);

export default function Update200Page() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 球場の絵(X のヘッダーと同じ絵)を背景に、紺を重ねて白い文字を読みやすくする */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20 px-4">
        <Image src="/updates/2-0-0-hero.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 to-brand-900/85" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <p className="text-xs md:text-sm font-bold text-brand-200 tracking-[0.2em] uppercase mb-2">Version 2.0.0</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4"><Phrase>アプリが新しくなりました</Phrase></h1>
          <p className="text-sm md:text-base text-brand-100"><Phrase>{"バージョン2.0.0で変わったことをまとめました。新しい機能は、アプリを最新版にアップデートすると使えます。"}</Phrase></p>
          <p className="text-sm font-bold text-white mt-6 mb-3"><Phrase>まだアップデートしていない方は、こちらから</Phrase></p>
          <div className="[&>div]:md:justify-center">
            <StoreButtons />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <Section
          id="media"
          title="トークで写真・動画が送れるようになりました"
          shot={<Shot n={5} alt="スタンドメイトのトーク画面 - 写真や動画を送り合える" />}
        >
          <p><Phrase>{"写真や動画を、一度に10個まで送れるようになりました。動画は1本3分までです。"}</Phrase></p>
        </Section>

        <Section id="url" title="トークのURLをタップで開けるようになりました">
          <p><Phrase>{"チケットの販売ページやお店の地図など、トークで送ったURLをタップすると開けるようになりました。開く前に、どのサイトかを確かめる画面が出ます。"}</Phrase></p>
          <p><Phrase>{"メッセージを長押しすると、文章やURLをコピーすることもできます。"}</Phrase></p>
        </Section>

        <Section
          id="call"
          title="アプリ内で通話ができるようになりました"
          shot={<Shot n={6} alt="スタンドメイトのアプリ内通話画面 - 電話番号を教えなくても音声通話できる" />}
        >
          <p><Phrase>{"トークできる相手と、電話番号を教えずに音声通話ができるようになりました。2026年12月31日までは、全員1日60分まで使えます。"}</Phrase></p>
        </Section>

        <Section
          id="bio"
          title="いいね・行きたい！・募集には自己紹介が必要になりました"
          shot={<Shot n={2} alt="スタンドメイトのプロフィール画面 - 自己紹介や好きな球団が表示される" />}
        >
          <p><Phrase>{"いいね・行きたい！・観戦の募集をするには、プロフィールの自己紹介が必要になりました。まだの方は、マイページからひとことだけでも書いてみてください。"}</Phrase></p>
        </Section>

        <Section
          id="design"
          title="画面のデザインが新しくなりました"
          shot={<>
            <Shot n={1} alt="スタンドメイトの新しいホーム画面" />
            <Shot n={3} alt="スタンドメイトの新しい観戦画面" />
          </>}
        >
          <p><Phrase>{"ホーム・観戦・トーク一覧・マイページの見た目を、新しい青の色で作り直しました。"}</Phrase></p>
        </Section>

        <section id="update" className="scroll-mt-24 mb-14 md:mb-20 rounded-3xl bg-brand-900 text-white px-6 py-10 text-center">
          <h2 className="text-xl md:text-2xl font-black mb-2"><Phrase>まだアップデートしていない方は、ぜひ最新版に</Phrase></h2>
          <p className="text-brand-100 text-sm mb-6"><Phrase>{"写真・動画や通話は、最新版にすると使えるようになります。ストアで「開く」と出ている場合は、すでに最新版です。"}</Phrase></p>
          <div className="[&>div]:md:justify-center">
            <StoreButtons />
          </div>
        </section>
      </div>
    </div>
  );
}
