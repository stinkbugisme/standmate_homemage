import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import Phrase from "../components/Phrase";

export const metadata: Metadata = {
  title: "使い方ガイド",
  description:
    "基本無料（有料プランは月額¥1,000）のスタンドメイトの使い方を解説。友達検索、観戦募集、トーク、アプリ内通話の使い方をステップごとにご紹介します。",
  alternates: { canonical: "/howto" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "使い方ガイド", item: "https://standmate.jp/howto" },
  ],
};

const STEPS = [
  { id: "download", label: "ダウンロード" },
  { id: "profile", label: "プロフィール" },
  { id: "search", label: "友達を探す" },
  { id: "watch", label: "観戦募集" },
  { id: "message", label: "トーク" },
  { id: "call", label: "通話", isNew: true },
];

// ストア画像(public/features/feature-NN.webp)
const Shot = ({ n, alt, caption }: { n: number; alt: string; caption?: string }) => (
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
    {caption && <figcaption className="text-xs text-gray-500 text-center mt-2"><Phrase>{caption}</Phrase></figcaption>}
  </figure>
);

const Step = ({ no, id, title, isNew, children, shots }: {
  no: number;
  id: string;
  title: string;
  isNew?: boolean;
  children: React.ReactNode;
  shots?: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 py-10 md:py-14 border-t border-gray-100 first:border-t-0">
    <div className={shots ? "md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-start" : ""}>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">{no}</span>
          <h2 className="text-xl md:text-2xl font-black text-gray-900"><Phrase>{title}</Phrase></h2>
          {isNew && <span className="bg-brand-50 text-brand-600 text-xs font-black px-2 py-0.5 rounded-full">NEW</span>}
        </div>
        <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">{children}</div>
      </div>
      {shots && <div className="flex justify-center gap-4 mt-6 md:mt-0">{shots}</div>}
    </div>
  </section>
);

const Note = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-brand-50/70 rounded-2xl p-4 md:p-5">
    <p className="font-bold text-brand-900 text-sm mb-1"><Phrase>{title}</Phrase></p>
    <p className="text-gray-600 text-sm leading-relaxed">{typeof children === "string" ? <Phrase>{children}</Phrase> : children}</p>
  </div>
);

const StoreButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center">
    <a
      href="https://apps.apple.com/jp/app/apple-store/id6753888706?pt=128208511&ct=howto&mt=8"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button cta-primary"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> App Store で公開中
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate&referrer=utm_source%3Dhowto"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button cta-secondary"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
    </a>
  </div>
);

export default function HowToPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <section className="pt-24 md:pt-28 pb-8 md:pb-10 px-4 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm font-bold text-brand-500 tracking-[0.2em] uppercase mb-2">How to use</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3"><Phrase>スタンドメイトの使い方</Phrase></h1>
          <p className="text-sm md:text-base text-gray-500"><Phrase>ダウンロードから観戦仲間と通話するまで、6つのステップで紹介します。</Phrase></p>
          <nav aria-label="ステップ" className="mt-6 flex flex-wrap justify-center gap-2">
            {STEPS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 bg-white border border-brand-100 hover:border-brand-500 text-brand-900 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full no-underline transition-colors"
              >
                <span className="text-brand-500">{i + 1}</span>
                {s.label}
                {s.isNew && <span className="text-[10px] text-brand-600">NEW</span>}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <Step no={1} id="download" title="アプリをダウンロード">
          <p><Phrase>{"iPhoneの方はApp Storeから、Androidの方はGoogle Playから「スタンドメイト」をダウンロードしてください。基本機能は無料で使えます。"}</Phrase></p>
          <StoreButtons />
        </Step>

        <Step
          no={2}
          id="profile"
          title="プロフィールを登録"
          shots={<Shot n={2} alt="スタンドメイトのプロフィール画面 - 好きな球団や住んでいる地域などの共通点がわかる" />}
        >
          <p><Phrase>{"ニックネーム、好きな球団、自己紹介などを設定しましょう。写真があると、相手に雰囲気が伝わりやすくなります。"}</Phrase></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><Phrase>{"ニックネーム・年齢・住んでいる地域を入力"}</Phrase></li>
            <li><Phrase>{"応援している球団を選ぶ（複数選べます）"}</Phrase></li>
            <li><Phrase>{"自己紹介文を書く"}</Phrase></li>
            <li><Phrase>{"プロフィール写真を設定（最大5枚）"}</Phrase></li>
          </ul>
          <p><Phrase>{"相手のプロフィールでは「あなたとの共通点」が表示されるので、話のきっかけを見つけやすくなっています。"}</Phrase></p>
        </Step>

        <Step
          no={3}
          id="search"
          title="友達を探す"
          shots={<>
            <Shot n={1} alt="スタンドメイトの友達検索画面 - 好きな球団が同じ人から順に表示" caption="おすすめ" />
            <Shot n={7} alt="スタンドメイトの絞り込み画面 - 球団・年齢・地域で絞り込み" caption="絞り込み" />
          </>}
        >
          <p><Phrase>{"ホーム画面には、好きな球団が同じ人から順に野球ファンのプロフィールが表示されます。気になる人に「いいね」を送り、お互いに「いいね」するとマッチング成立です。"}</Phrase></p>
          <Note title="ホーム画面のタブ">
            <strong>おすすめ</strong>：あなたに合った野球ファンが表示されます<br />
            <strong>相手から</strong>：あなたに「いいね」してくれた人を確認できます<br />
            <strong>絞り込み</strong>：球団・年齢・性別・住んでいる地域で相手を絞れます
          </Note>
        </Step>

        <Step
          no={4}
          id="watch"
          title="観戦募集を使う"
          shots={<>
            <Shot n={3} alt="スタンドメイトの観戦募集画面 - 一緒に球場に行く仲間を募集" caption="募集を探す" />
            <Shot n={4} alt="スタンドメイトの募集詳細画面 - 日時・球場・席をまとめて伝えられる" caption="募集の詳細" />
          </>}
        >
          <p><Phrase>{"「観戦」タブから、一緒に野球を観る仲間を募集したり、ほかの人の募集に参加したりできます。募集は3種類から選べます。"}</Phrase></p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>現地観戦</strong>：球場で一緒に観る</li>
            <li><strong>通話で観戦</strong>：別々の場所から、通話しながら一緒に観る</li>
            <li><strong>交流・その他</strong>：スポーツバー・飲み会・グッズの買い物など</li>
          </ul>
          <Note title="募集を探す">
            気になる募集があれば「行きたい！」（通話で観戦なら「通話したい！」）を押して参加希望を送りましょう。チケットを持っているファンが募集していることも多いので、初めての球場でも気軽に参加できます。
          </Note>
          <Note title="募集を作成する">
            日時・球場・席・募集内容を入力して、観戦仲間を募集できます。「○○ファンの方いませんか？」と観戦仲間を探したり、ファン同士のご飯会を企画したりもできます。
          </Note>
        </Step>

        <Step
          no={5}
          id="message"
          title="トークで交流"
          shots={<Shot n={5} alt="スタンドメイトのトーク画面 - マッチング後にメッセージや写真を送り合える" />}
        >
          <p><Phrase>{"マッチングが成立したら、トークでやり取りできます。観戦の待ち合わせや試合の感想など、気軽に話しましょう。"}</Phrase></p>
          <p><Phrase>{"写真や動画も送れるので、球場の景色やグッズの写真を見せ合うこともできます。"}</Phrase></p>
        </Step>

        <Step
          no={6}
          id="call"
          title="アプリ内通話"
          isNew
          shots={<Shot n={6} alt="スタンドメイトのアプリ内通話画面 - 電話番号を教えなくても音声通話できる" />}
        >
          <p><Phrase>{"トーク画面の電話マークから、トークできる相手（マッチした相手や、観戦募集で参加が決まった相手）と音声通話ができます。電話番号を教えなくても話せるので、会う前に声で雰囲気を確かめたいときや、「通話で観戦」で一緒に試合を観るときに便利です。"}</Phrase></p>
          <Note title="通話できる時間">
            通話は、かけた人の1日の通話時間を使います。通話時間は毎朝3時に元に戻ります。2026年12月31日までは特別期間で、全員1日60分使えます。
          </Note>
        </Step>

        {/* Tips */}
        <section className="py-10 md:py-14 border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-5"><Phrase>安心・便利に使うために</Phrase></h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-brand-600 mb-2">通報・ブロック</h3>
              <p className="text-sm text-gray-600 leading-relaxed"><Phrase>{"不快なユーザーを見つけたら、プロフィールやトーク画面の「…」メニューから通報・ブロックができます。ブロックした相手にはあなたのプロフィールが表示されなくなります。"}</Phrase></p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-brand-600 mb-2">プレミアム会員</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                月額¥1,000で、いいね・スキップが1日30回、行きたい！が1日20回に増え、プロフィールや募集を表示する相手の性別も選べます。マイページから登録できます。
                <Link href="/#plans" className="text-brand-600 font-bold underline underline-offset-2 ml-1">料金プランを見る</Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-14 md:mb-20 rounded-3xl bg-brand-900 text-white px-6 py-10 text-center">
          <h2 className="text-xl md:text-2xl font-black mb-2"><Phrase>さあ、野球仲間を見つけよう</Phrase></h2>
          <p className="text-brand-100 text-sm mb-6"><Phrase>基本無料ですぐに始められます。</Phrase></p>
          <div className="[&>div]:md:justify-center">
            <StoreButtons />
          </div>
        </section>
      </div>
    </div>
  );
}
