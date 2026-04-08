import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "使い方ガイド",
  description:
    "スタンドメイトの使い方を解説。友達検索、観戦募集、メッセージ機能の使い方をステップごとにご紹介します。",
  alternates: { canonical: "/howto" },
};

export default function HowToPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="subpage-container">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
            ← トップページに戻る
          </Link>
        </div>

        <h1>使い方</h1>

        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">1</span>
            <h2 className="!border-0 !pb-0 !mb-0">アプリをダウンロード</h2>
          </div>
          <p>
            App Storeから「スタンドメイト」をダウンロードしてください。基本機能は無料でご利用いただけます。
          </p>
          <div className="flex justify-center my-4">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffffff', textDecoration: 'none' }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 font-bold py-3 px-8 rounded-full shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all hover:scale-105"
            >
              App Store でダウンロード →
            </a>
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
            <li>応援している球団を選択</li>
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
              src="/IMG_3479.PNG"
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
        </section>

        {/* Step 4 */}
        <section id="watch">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">4</span>
            <h2 className="!border-0 !pb-0 !mb-0">観戦募集を使う</h2>
          </div>
          <p>
            「観戦」タブから、一緒に野球を観に行く仲間を募集したり、他の人の募集に参加できます。
          </p>
          <div className="flex justify-center my-6">
            <Image
              src="/IMG_3480.PNG"
              alt="スタンドメイトの観戦募集画面 - 一緒に球場に行く仲間を募集"
              width={208}
              height={451}
              className="w-52 h-auto rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
          <div className="info-box">
            <p className="font-semibold !text-gray-700 !mb-2">募集を探す</p>
            <p className="!mb-0">「探す」タブで募集一覧を確認。気になる募集があれば「確認」ボタンから参加希望を送れます。</p>
          </div>
          <div className="info-box mt-3">
            <p className="font-semibold !text-gray-700 !mb-2">募集を作成する</p>
            <p className="!mb-0">「募集する」タブから、日時・球場・募集内容を入力して観戦仲間を募集できます。</p>
          </div>
        </section>

        {/* Step 5 */}
        <section id="message">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-black flex-shrink-0">5</span>
            <h2 className="!border-0 !pb-0 !mb-0">メッセージで交流</h2>
          </div>
          <p>
            マッチングが成立したら、メッセージでやり取りできます。観戦の待ち合わせや試合の感想など、気軽に交流しましょう。
          </p>
          <div className="flex justify-center my-6">
            <Image
              src="/IMG_3482.PNG"
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
          <a
            href="https://apps.apple.com/jp/app/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%A1%E3%82%A4%E3%83%88/id6753888706"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', textDecoration: 'none' }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 font-bold py-3 px-8 rounded-full shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all hover:scale-105"
          >
            App Store でダウンロード
          </a>
        </section>
      </div>
    </div>
  );
}
