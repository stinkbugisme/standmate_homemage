import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "スタンドメイトのプライバシーポリシーです。個人情報の取り扱いについてご確認ください。",
  alternates: { canonical: "/privacy" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "プライバシーポリシー", item: "https://standmate.jp/privacy" },
  ],
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">

        <h1>プライバシーポリシー</h1>

        <section>
          <p>
            中根大輔（以下「当方」または「当アプリ」）は、「スタンドメイト」（以下「本サービス」）をご利用いただくお客様（以下「ユーザー」）の個人情報および個人データの保護を最重要課題と認識し、
            個人情報の保護に関する法律（以下「個人情報保護法」）その他の関連法令を遵守し、適切な取扱いおよび保護に努めます。
          </p>
        </section>

        <section>
          <h2>第1条（個人情報取扱事業者の名称および連絡先）</h2>
          <p>個人情報保護法第32条第1項の規定に基づき、個人情報取扱事業者の情報を以下の通り公表します。</p>
          <div className="info-box">
            <table>
              <tbody>
                <tr>
                  <td>事業者の氏名</td>
                  <td>中根大輔</td>
                </tr>
                <tr>
                  <td>所在地</td>
                  <td>請求があった場合に遅滞なく開示いたします。</td>
                </tr>
                <tr>
                  <td>連絡先</td>
                  <td><a href="mailto:info@standmate.jp">info@standmate.jp</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>第2条（取得する個人情報の項目）</h2>
          <p>当方は、本サービスの提供にあたり、以下の個人情報を取得します。</p>

          <h3>2.1 ユーザーから直接取得する情報</h3>
          <ul className="list-disc">
            <li><strong>プロフィール情報</strong>：ニックネーム、性別、年齢、居住地（都道府県）、好きな球団、自己紹介文</li>
            <li><strong>画像データ</strong>：メイン写真およびサブ写真（最大5枚）</li>
            <li><strong>利用情報</strong>：いいね履歴、スキップ履歴、マッチング履歴、メッセージ内容、観戦募集の投稿内容および参加希望履歴</li>
          </ul>

          <h3>2.2 自動的に取得される情報</h3>
          <ul className="list-disc">
            <li><strong>デバイス情報</strong>：デバイスID、OS種別・バージョン、アプリバージョン</li>
            <li><strong>ログ情報</strong>：アクセス日時、IPアドレス、利用機能、エラーログ</li>
            <li><strong>プッシュ通知トークン</strong>：Expoが発行するプッシュ通知用トークン</li>
          </ul>

          <h3>2.3 外部サービスとの連携により取得する情報</h3>
          <ul className="list-disc">
            <li><strong>Apple ID連携</strong>：匿名化されたユーザー識別子（auth_id）</li>
            <li><strong>App Store購入履歴</strong>：サブスクリプションの購入日時、有効期限、トランザクションID</li>
            <li><strong>決済情報</strong>：App Store経由の課金情報（当方は決済情報そのものを直接取り扱いません。Apple Inc.が処理します。）</li>
          </ul>
        </section>

        <section>
          <h2>第3条（個人情報の取得方法）</h2>
          <p>当方は、以下の方法により個人情報を適法に取得します。偽りその他不正の手段により個人情報を取得することはありません。</p>
          <ul className="list-disc">
            <li><strong>ユーザーによる直接入力</strong>：アプリ内でのプロフィール登録、編集、メッセージ送信、募集投稿時</li>
            <li><strong>自動収集</strong>：本サービスの利用に伴い、サーバーログとして自動的に記録</li>
            <li><strong>外部サービスAPI経由</strong>：Supabase Auth（匿名認証）、Apple In-App Purchase API（購入履歴検証）</li>
          </ul>
        </section>

        <section>
          <h2>第4条（利用目的）</h2>
          <p>当方は、取得した個人情報を以下の具体的な目的のために利用します。</p>
          <ul className="list-disc">
            <li>本サービスの提供、維持、保護および改善</li>
            <li>ユーザー認証およびアカウント管理</li>
            <li>マッチング機能の提供（いいね、スキップ、相互マッチング）</li>
            <li>メッセージ機能の提供</li>
            <li>観戦募集機能の提供</li>
            <li>プレミアム会員機能の提供および管理</li>
            <li>サブスクリプション料金の請求および決済処理の管理</li>
            <li>カスタマーサポート、問い合わせ対応</li>
            <li>本サービスに関する重要なお知らせ、メンテナンス情報の通知</li>
            <li>利用規約違反行為の監視および対応</li>
            <li>不正利用の検知および防止</li>
            <li>本サービスの利用状況の分析、統計データの作成（個人を特定できない形式に加工）</li>
            <li>本サービスの新機能開発、品質向上</li>
          </ul>
        </section>

        <section>
          <h2>第5条（個人データの保管場所および管理方法）</h2>
          <p>ユーザーの個人データは、<strong>Supabase, Inc.（米国）</strong>が提供するデータベースおよびストレージサービスに保管されます。</p>
          <p>Supabaseは、ISO 27001認証を取得しており、業界標準のセキュリティ対策（データの暗号化、アクセス制御、監査ログ）を実施しています。</p>
          <p>当方は、Supabaseとの間で適切なデータ処理契約を締結し、個人データの安全管理について合意しています。</p>
        </section>

        <section>
          <h2>第6条（安全管理措置）</h2>
          <p>当方は、個人データの漏えい、滅失または毀損の防止その他の個人データの安全管理のため、以下の具体的な措置を講じています。</p>

          <h3>6.1 組織的安全管理措置</h3>
          <ul className="list-disc">
            <li>個人データの取扱いに関する責任者を明確化</li>
            <li>個人データの取扱状況を定期的に点検・監査</li>
          </ul>

          <h3>6.2 人的安全管理措置</h3>
          <ul className="list-disc">
            <li>個人データの適正な取扱いに関する定期的な自己研修の実施</li>
            <li>外部委託先との間で機密保持契約（NDA）を締結</li>
          </ul>

          <h3>6.3 物理的安全管理措置</h3>
          <ul className="list-disc">
            <li>個人データを取り扱う機器への物理的なアクセス制限</li>
            <li>個人データを含む記録媒体（PCハードディスク等）の厳重な保管および廃棄時の完全消去</li>
          </ul>

          <h3>6.4 技術的安全管理措置</h3>
          <ul className="list-disc">
            <li>データベースへのアクセス権限を必要最小限に制限（Row Level Security適用）</li>
            <li>通信経路の暗号化（HTTPS/TLS通信）</li>
            <li>データベース内の個人データの暗号化</li>
            <li>不正アクセス検知システムの導入</li>
            <li>定期的なセキュリティパッチ適用</li>
          </ul>
        </section>

        <section>
          <h2>第7条（第三者提供）</h2>
          <p>当方は、以下の場合を除き、ユーザーの個人データを第三者に提供することはありません。</p>
          <ul className="list-disc">
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
          </ul>

          <h3>7.1 第三者への委託</h3>
          <p>当方は、本サービスの運営上、以下の第三者サービスに個人データの取扱いを委託しています。委託先に対しては、適切な監督を行い、個人データの安全管理が図られるよう必要な措置を講じています。</p>
          <div className="info-box">
            <p className="!text-gray-700 font-semibold !mb-3">委託先一覧：</p>
            <ul className="list-disc space-y-4 !mb-0">
              <li>
                <strong>Supabase, Inc.（米国）</strong><br />
                委託内容：データベースおよびストレージサービスの提供<br />
                提供される個人データの項目：第2条に記載の全ての個人データ<br />
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sm">Supabase Privacy Policy</a>
              </li>
              <li>
                <strong>Expo (by Vercel Inc.)（米国）</strong><br />
                委託内容：プッシュ通知送信サービスの提供<br />
                提供される個人データの項目：デバイスID、プッシュ通知トークン、通知内容<br />
                <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-sm">Expo Privacy Policy</a>
              </li>
              <li>
                <strong>Apple Inc.（米国）</strong><br />
                委託内容：アプリ内課金処理、購入履歴管理<br />
                提供される個人データの項目：Apple ID（匿名化）、購入履歴、決済情報<br />
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-sm">Apple Privacy Policy</a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>第8条（個人データの開示、訂正、利用停止等の請求）</h2>
          <p>ユーザーは、当方に対し、個人情報保護法の定めに基づき、以下の権利を行使することができます。</p>

          <h3>8.1 開示請求</h3>
          <p>ユーザーは、当方が保有するご自身の個人データの開示を請求することができます（法第33条）。</p>

          <h3>8.2 訂正・追加・削除請求</h3>
          <p>ユーザーは、ご自身の個人データの内容が事実でないと判断した場合、訂正、追加または削除（以下「訂正等」）を請求することができます（法第34条）。</p>

          <h3>8.3 利用停止・消去請求</h3>
          <p>ユーザーは、以下のいずれかに該当する場合、個人データの利用停止または消去を請求することができます（法第35条）。</p>
          <ul className="list-disc">
            <li>個人データが、あらかじめ公表された利用目的の範囲を超えて取り扱われている場合</li>
            <li>偽りその他不正の手段により個人情報が取得された場合</li>
            <li>個人データの利用の必要性が失われた場合</li>
            <li>個人データの漏えい等が発生した場合</li>
            <li>その他ユーザーの権利または正当な利益が害されるおそれがある場合</li>
          </ul>

          <h3>8.4 請求手続き</h3>
          <p>上記の請求を行う場合は、以下の連絡先までメールにてご連絡ください。</p>
          <div className="info-box">
            <p className="!text-gray-700 font-semibold">請求受付窓口：</p>
            <p>メールアドレス：<a href="mailto:info@standmate.jp">info@standmate.jp</a></p>
            <p className="text-sm !text-gray-400 !mb-0">
              件名に「個人情報開示等請求」と明記し、本文にご請求内容および本人確認に必要な情報（登録済みメールアドレス等）を記載してください。
            </p>
          </div>
          <p>当方は、ご本人確認を行った上で、遅滞なく（原則として2週間以内に）対応いたします。</p>
        </section>

        <section>
          <h2>第9条（アカウントの削除および個人データの消去）</h2>
          <p>ユーザーはいつでもアカウントを削除し、個人データの消去を請求することができます。</p>
          <p>
            アカウント削除をご希望の場合は、アプリ内のお問い合わせフォームまたは
            <a href="mailto:info@standmate.jp">info@standmate.jp</a> までご連絡ください。
          </p>
          <p>アカウント削除後、個人データは原則として速やかに（30日以内に）削除されます。ただし、以下の情報については、法令で保管が義務付けられている期間、または紛争解決のために必要な期間、保管することがあります。</p>
          <ul className="list-disc">
            <li>課金履歴、取引記録：消費税法、会社法等に基づき最長7年間</li>
            <li>通信ログ：電気通信事業法に基づき一定期間</li>
            <li>不正利用に関する記録：再発防止のために必要な期間</li>
          </ul>
        </section>

        <section>
          <h2>第10条（苦情の申出先）</h2>
          <p>個人情報の取扱いに関する苦情については、以下の窓口までご連絡ください。</p>
          <div className="info-box">
            <p className="!text-gray-700 font-semibold">苦情申出窓口：</p>
            <p>メールアドレス：<a href="mailto:info@standmate.jp">info@standmate.jp</a></p>
            <p className="text-sm !text-gray-400 !mb-0">当方は、苦情について迅速かつ適切に対応いたします。</p>
          </div>
        </section>

        <section>
          <h2>第11条（未成年者の利用）</h2>
          <p>本サービスは18歳以上の方を対象としています。</p>
          <p>18歳未満の方が本サービスを利用する場合は、保護者の同意が必要です。</p>
        </section>

        <section>
          <h2>第12条（プライバシーポリシーの変更）</h2>
          <p>当方は、法令改正、本サービスの変更、その他必要に応じて、本プライバシーポリシーを変更することがあります。</p>
          <p>変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。</p>
          <p>重要な変更がある場合は、アプリ内での通知またはメールにて事前にユーザーにお知らせいたします。</p>
        </section>

        <section className="!mb-0 border-t border-gray-100 pt-8">
          <p className="text-center !text-gray-500">制定日：2025年10月14日</p>
          <p className="text-center text-sm !text-gray-400">（個人情報保護法 令和4年4月1日施行改正対応版）</p>
        </section>
      </div>
    </div>
  );
}
