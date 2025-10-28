import Link from 'next/link';

export default function SupportPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* トップに戻るリンク */}
      <div style={{ marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#ff6b6b', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>←</span> トップページに戻る
        </Link>
      </div>

      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: '#333' }}>サポート</h1>

      {/* お問い合わせ */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#ff6b6b' }}>お問い合わせ</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginBottom: '16px' }}>
          アプリに関するご質問、不具合の報告、ご要望などがございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
        </p>
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
          <p style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>
            📧 <a href="mailto:support@standmate.app" style={{ color: '#ff6b6b', textDecoration: 'none' }}>support@standmate.app</a>
          </p>
        </div>
        <p style={{ fontSize: '14px', color: '#999' }}>
          ※ 通常、24時間以内にご返信いたします。週末・祝日を挟む場合は、お時間をいただく場合がございます。
        </p>
      </section>

      {/* よくある質問 */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#ff6b6b' }}>よくある質問（FAQ）</h2>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Q. アカウントを削除したい</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            A. アカウント削除をご希望の場合は、上記のサポートメールアドレスまでご連絡ください。ご本人確認後、速やかに対応いたします。
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Q. プレミアム会員の解約方法</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            A. iOSの「設定」→「Apple ID」→「サブスクリプション」から「スタンドメイト」を選択し、「サブスクリプションをキャンセル」をタップしてください。
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Q. 不適切なユーザーを見つけた</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            A. アプリ内の通報機能をご利用ください。プロフィール詳細画面の右上「…」メニューから「通報」を選択できます。通報内容は24時間以内に確認し、適切な対応を行います。
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Q. マッチングしたユーザーとメッセージができない</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            A. 以下をご確認ください：
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', paddingLeft: '20px' }}>
            <li>インターネット接続が正常か確認</li>
            <li>アプリを最新バージョンにアップデート</li>
            <li>アプリを再起動</li>
          </ul>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginTop: '8px' }}>
            それでも解決しない場合は、サポートまでお問い合わせください。
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Q. 購入の復元ができない</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            A. マイページの「購入を復元」ボタンを押してください。それでも復元できない場合は、購入時のApple IDでログインしているかご確認ください。
          </p>
        </div>
      </section>

      {/* 関連リンク */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#ff6b6b' }}>関連リンク</h2>
        <ul style={{ fontSize: '16px', lineHeight: '2', color: '#666', listStyle: 'none', padding: 0 }}>
          <li>
            <Link href="/terms" style={{ color: '#ff6b6b', textDecoration: 'none' }}>📄 利用規約</Link>
          </li>
          <li>
            <Link href="/privacy" style={{ color: '#ff6b6b', textDecoration: 'none' }}>🔒 プライバシーポリシー</Link>
          </li>
          <li>
            <Link href="/legal" style={{ color: '#ff6b6b', textDecoration: 'none' }}>⚖️ 特定商取引法に基づく表記</Link>
          </li>
        </ul>
      </section>

      {/* フッター */}
      <footer style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginTop: '48px' }}>
        <p style={{ fontSize: '14px', color: '#999', textAlign: 'center' }}>
          © 2025 スタンドメイト. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
