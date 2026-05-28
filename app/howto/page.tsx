import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "使い方ガイド",
  description:
    "スタンドメイトの使い方を解説。友達検索、観戦募集、メッセージ機能の使い方をステップごとにご紹介します。",
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

export default function HowToPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">

        <h1>使い方</h1>

        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">1</span>
            <h2 className="!border-0 !pb-0 !mb-0">アプリをダウンロード</h2>
          </div>
          <p>
            iPhoneの方はApp Storeから、Androidの方はGoogle Playから「スタンドメイト」をダウンロードしてください。基本機能は無料でご利用いただけます。
          </p>
          <div className="flex justify-center my-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-primary"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> App Store で公開中
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-secondary"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
              </a>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">2</span>
            <h2 className="!border-0 !pb-0 !mb-0">プロフィールを登録</h2>
          </div>
          <p>
            ニックネーム、好きな球団、年齢、自己紹介などを設定しましょう。写真を登録するとマッチング率がアップします。
          </p>
          <ul className="list-disc">
            <li>ニックネーム・年齢・居住地を入力</li>
            <li>応援している球団を選択（複数選択可能）</li>
            <li>自己紹介文を書く</li>
            <li>プロフィール写真を設定（最大5枚）</li>
          </ul>
        </section>

        {/* Step 3 */}
        <section id="search">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">3</span>
            <h2 className="!border-0 !pb-0 !mb-0">友達を探す</h2>
          </div>
          <p>
            ホーム画面で野球ファンのプロフィールが表示されます。気になる人に「いいね」を送りましょう。お互いに「いいね」するとマッチング成立です。
          </p>
          <div className="flex justify-center my-6">
            <Image
              src="/screenshot-home.png"
              alt="スタンドメイトの友達検索画面 - 野球ファンのプロフィールをスワイプ"
              width={208}
              height={451}
              className="w-52 h-auto rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
          <div className="info-box">
            <p className="!mb-1"><strong>「おすすめ」タブ</strong>：あなたに合った野球ファンが表示されます</p>
            <p className="!mb-1"><strong>「相手から」タブ</strong>：あなたに「いいね」してくれた人を確認できます</p>
            <p className="!mb-0"><strong>「絞り込み」</strong>：球団・年齢・地域で絞り込みができます</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 my-6">
            <div className="flex flex-col items-center">
              <Image
                src="/screenshot-filter-region.png"
                alt="スタンドメイトの絞り込み画面 - 年齢・性別・居住地で絞り込み"
                width={208}
                height={451}
                className="w-40 sm:w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
              />
              <p className="text-xs text-gray-500 mt-2">年齢・性別・居住地で絞り込み</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/screenshot-filter-team.png"
                alt="スタンドメイトのチーム絞り込み画面 - 好きな球団で絞り込み"
                width={208}
                height={451}
                className="w-40 sm:w-48 h-auto rounded-2xl shadow-lg border border-gray-100"
              />
              <p className="text-xs text-gray-500 mt-2">好きな球団で絞り込み</p>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section id="watch">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">4</span>
            <h2 className="!border-0 !pb-0 !mb-0">観戦募集を使う</h2>
          </div>
          <p>
            「観戦」タブから、一緒に野球を観に行く仲間を募集したり、他の人の募集に参加できます。
            チケットが余ったときの譲り先探しや、逆にチケットを探している人との出会い、同じファン同士での飲み会の企画など、観戦以外の交流にも活用できます。
          </p>
          <div className="flex justify-center my-6">
            <Image
              src="/screenshot-watch-search.png"
              alt="スタンドメイトの観戦募集画面 - 一緒に球場に行く仲間を募集"
              width={208}
              height={451}
              className="w-52 h-auto rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
          <div className="info-box">
            <p className="font-semibold !text-gray-700 !mb-2">募集を探す</p>
            <p className="!mb-0">「探す」タブで募集一覧を確認。すでにチケットを持っている熱心なファンが募集をかけていることも多いので、チケットの取り方や球場への行き方がわからない初心者でも気軽に参加できます。気になる募集があれば「行きたい！」を押して参加希望を送りましょう。</p>
          </div>
          <div className="flex justify-center my-6">
            <Image
              src="/screenshot-watch-create.png"
              alt="スタンドメイトの観戦募集作成画面 - 観戦日・球団・説明を入力して募集"
              width={208}
              height={451}
              className="w-52 h-auto rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
          <div className="info-box">
            <p className="font-semibold !text-gray-700 !mb-2">募集を作成する</p>
            <p className="!mb-0">「募集する」タブから、日時・球場・募集内容を入力して観戦仲間を募集できます。「○○球団のファンの方いませんか？」と一緒に観戦に行く仲間を探したり、「同じ球団のファンの方、ご飯行きませんか？」と観戦以外の交流を企画することもできます。</p>
          </div>
          <div className="info-box mt-3">
            <p className="font-semibold !text-gray-700 !mb-2">こんな使い方も</p>
            <p className="!mb-0">チケットが余ったときの譲り先探しや、逆にチケットを探している人とのマッチングにも便利です。観戦募集は野球を通じた交流の入り口として、さまざまな使い方ができます。</p>
          </div>
        </section>

        {/* Step 5 */}
        <section id="message">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">5</span>
            <h2 className="!border-0 !pb-0 !mb-0">メッセージで交流</h2>
          </div>
          <p>
            マッチングが成立したら、メッセージでやり取りできます。観戦の待ち合わせや試合の感想など、気軽に交流しましょう。
          </p>
          <div className="flex justify-center my-6">
            <Image
              src="/screenshot-message.png"
              alt="スタンドメイトのメッセージ画面 - マッチング後のチャット交流"
              width={208}
              height={451}
              className="w-52 h-auto rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2>便利な使い方</h2>
          <div className="space-y-3">
            <div className="border border-gray-100 rounded-xl p-5 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">通報・ブロック機能</h3>
              <p className="!mb-0">
                不快なユーザーを見つけたら、プロフィールやメッセージ画面の「…」メニューから通報・ブロックができます。ブロックした相手にはあなたのプロフィールが表示されなくなります。
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5 hover:border-orange-200 transition-colors">
              <h3 className="!text-red-500">プレミアム会員</h3>
              <p className="!mb-0">
                月額1,000円でいいね回数UP（30回/日）、観戦募集参加枠UP（20回/日）など、もっと便利に使えます。マイページから登録できます。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-primary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> App Store で公開中
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.stinkbug.standmate"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-secondary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#34A853" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/><path fill="#4285F4" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z"/><path fill="#FBBC04" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"/><path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg> Google Play で公開中
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
