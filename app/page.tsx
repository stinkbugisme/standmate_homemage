import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <main className="text-center px-4">
        {/* アプリアイコン */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center">
            <span className="text-6xl">⚾️</span>
          </div>
        </div>

        {/* アプリ名 */}
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          スタンドメイト
        </h1>

        {/* キャッチコピー */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          野球ファン同士が繋がる、友達検索＆観戦マッチングアプリ
        </p>

        {/* 特徴 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold text-lg mb-2">友達検索</h3>
            <p className="text-gray-600 text-sm">
              同じ球団を応援する仲間を見つけよう
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-3">🏟️</div>
            <h3 className="font-bold text-lg mb-2">観戦募集</h3>
            <p className="text-gray-600 text-sm">
              一緒に球場に行く仲間を募集できる
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-lg mb-2">メッセージ</h3>
            <p className="text-gray-600 text-sm">
              マッチング後はチャットで気軽に交流
            </p>
          </div>
        </div>

        {/* ダウンロードボタン（将来用） */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm">
            App Store・Google Playで近日公開予定
          </p>
        </div>

        {/* フッターリンク */}
        <div className="flex gap-6 justify-center text-sm flex-wrap">
          <Link
            href="/legal"
            className="text-gray-600 hover:text-red-500 underline transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
          <Link
            href="/privacy"
            className="text-gray-600 hover:text-red-500 underline transition-colors"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/terms"
            className="text-gray-600 hover:text-red-500 underline transition-colors"
          >
            利用規約
          </Link>
        </div>
      </main>

      <footer className="mt-12 pb-6 text-center text-gray-500 text-sm">
        <p>© 2024 スタンドメイト</p>
      </footer>
    </div>
  );
}
