export default function LegalNotice() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">特定商取引法に基づく表記</h1>

      <div className="prose prose-lg max-w-none">
        <table className="w-full border-collapse border border-gray-300 mb-8">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold w-1/3">販売業者</td>
              <td className="p-4">
                中根大輔
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">代表責任者</td>
              <td className="p-4">中根大輔</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">所在地</td>
              <td className="p-4">
                〒590-0004 大阪府堺市堺区北清水町3-5-18
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">電話番号</td>
              <td className="p-4">
                070-4400-9411
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">メールアドレス</td>
              <td className="p-4">
                <a href="mailto:support@standmate.app" className="text-blue-600 hover:underline">
                  support@standmate.app
                </a>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">運営統括責任者</td>
              <td className="p-4">中根大輔</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">サービス名称</td>
              <td className="p-4">スタンドメイト</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">販売価格</td>
              <td className="p-4">
                <strong>プレミアム会員：月額1,000円（税込）</strong><br />
                <span className="text-sm text-gray-600">
                  ※価格は予告なく変更される場合がございます。最新の価格はアプリ内の購入画面でご確認ください。
                </span>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">商品代金以外の必要料金</td>
              <td className="p-4">
                インターネット接続料金、通信料金等はお客様のご負担となります。
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">支払方法</td>
              <td className="p-4">
                App Store経由：Apple ID に登録された決済方法（クレジットカード、デビットカード、App Storeギフトカード等）<br />
                <span className="text-sm text-gray-600">
                  ※決済はAppleが処理します。当アプリは決済情報を直接取り扱いません。
                </span>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">支払時期</td>
              <td className="p-4">
                サブスクリプション購入時に即時決済されます。<br />
                自動更新の場合は、更新日の24時間以内に自動的に課金されます。
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">サービスの提供時期</td>
              <td className="p-4">
                決済完了後、即時にプレミアム会員機能がご利用いただけます。
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">返品・キャンセルに関する特約</td>
              <td className="p-4">
                <p className="mb-3">
                  <strong>■ 原則</strong><br />
                  デジタルコンテンツおよびサブスクリプションサービスの性質上、お客様都合による返品・返金・キャンセルには応じかねます。
                </p>
                <p className="mb-3">
                  <strong>■ 契約不適合時の対応</strong><br />
                  当方の責に帰すべき事由によりサービスが提供できない場合（重大なバグによる機能不全等）、
                  サービス提供不能が発覚してから7日以内に上記メールアドレスまでご連絡いただければ、
                  個別に対応を協議いたします。
                </p>
                <p className="mb-3">
                  <strong>■ Apple Media Servicesの返金ポリシー</strong><br />
                  App Store経由で購入されたサブスクリプションの返金処理は、Appleの
                  <a
                    href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Apple Media Services利用規約
                  </a>
                  に従います。<br />
                  返金をご希望の場合は、Apple サポート（
                  <a
                    href="https://reportaproblem.apple.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://reportaproblem.apple.com/
                  </a>
                  ）へ直接お問い合わせください。
                </p>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">サブスクリプションの解約</td>
              <td className="p-4">
                <p className="mb-3">
                  サブスクリプションの解約は、App Storeの設定画面から、お客様ご自身で行っていただく必要があります。
                </p>
                <p className="mb-3">
                  <strong>【解約手順】</strong><br />
                  1. iPhoneの「設定」アプリを開く<br />
                  2. 一番上のApple IDをタップ<br />
                  3. 「サブスクリプション」をタップ<br />
                  4. 「スタンドメイト」を選択<br />
                  5. 「サブスクリプションをキャンセルする」をタップ
                </p>
                <p className="text-sm text-gray-600">
                  ※解約後も、購入済みの期間が終了するまでプレミアム会員機能をご利用いただけます。<br />
                  ※当アプリの運営者側では、お客様のサブスクリプションを直接キャンセルすることはできません。
                </p>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="bg-gray-50 p-4 font-semibold">自動更新について</td>
              <td className="p-4">
                プレミアム会員のサブスクリプションは自動更新されます。<br />
                お客様が解約手続きを行わない限り、購入期間の終了時に自動的に同じ期間で更新され、課金が継続されます。<br />
                <span className="text-sm text-gray-600">
                  ※自動更新を停止したい場合は、上記「サブスクリプションの解約」手順に従ってください。
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">開示請求について</h2>
          <p>
            本表記において、バーチャルオフィスの住所・電話番号を記載している場合、
            お取引時にお客様からご請求があれば、遅滞なく詳細な連絡先情報を開示いたします。
          </p>
          <p className="mt-4">
            開示請求は、上記メールアドレス（
            <a href="mailto:support@standmate.app" className="text-blue-600 hover:underline">
              support@standmate.app
            </a>
            ）までご連絡ください。
          </p>
        </section>

        <section className="mt-12 pt-8 border-t">
          <p className="text-gray-600 text-center">
            制定日：2025年10月14日
          </p>
        </section>
      </div>
    </div>
  );
}
