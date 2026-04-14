import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "スタンドメイトの特定商取引法に基づく表記です。",
  alternates: { canonical: "/legal" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "特定商取引法に基づく表記", item: "https://standmate.jp/legal" },
  ],
};

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">

        <h1>特定商取引法に基づく表記</h1>

        <section>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base" style={{ tableLayout: 'fixed' }}>
              <tbody>
                <tr>
                  <td className="align-top">販売業者</td>
                  <td>中根大輔</td>
                </tr>
                <tr>
                  <td className="align-top">代表責任者</td>
                  <td>中根大輔</td>
                </tr>
                <tr>
                  <td className="align-top">所在地</td>
                  <td className="break-words">請求があった場合に遅滞なく開示いたします。</td>
                </tr>
                <tr>
                  <td className="align-top">電話番号</td>
                  <td>請求があった場合に遅滞なく開示いたします。</td>
                </tr>
                <tr>
                  <td className="align-top">メールアドレス</td>
                  <td className="break-all"><a href="mailto:info@standmate.jp">info@standmate.jp</a></td>
                </tr>
                <tr>
                  <td className="align-top">運営統括責任者</td>
                  <td>中根大輔</td>
                </tr>
                <tr>
                  <td className="align-top">サービス名称</td>
                  <td>スタンドメイト</td>
                </tr>
                <tr>
                  <td className="align-top">販売価格</td>
                  <td>
                    <strong>プレミアム会員：月額1,000円（税込）</strong><br />
                    <span className="text-sm text-gray-400">※価格は予告なく変更される場合がございます。最新の価格はアプリ内の購入画面でご確認ください。</span>
                  </td>
                </tr>
                <tr>
                  <td className="align-top">商品代金以外の必要料金</td>
                  <td>インターネット接続料金、通信料金等はお客様のご負担となります。</td>
                </tr>
                <tr>
                  <td className="align-top">支払方法</td>
                  <td>
                    <strong>iOS版（App Store経由）：</strong>Apple ID に登録された決済方法（クレジットカード、デビットカード、App Storeギフトカード等）<br />
                    <strong>Android版（Google Play経由）：</strong>Google アカウントに登録された決済方法（クレジットカード、デビットカード、キャリア決済、Google Playギフトコード等）<br />
                    <span className="text-sm text-gray-400">※決済は Apple または Google が処理します。当アプリは決済情報を直接取り扱いません。</span>
                  </td>
                </tr>
                <tr>
                  <td className="align-top">支払時期</td>
                  <td>
                    サブスクリプション購入時に即時決済されます。<br />
                    自動更新の場合は、更新日の24時間以内に自動的に課金されます。
                  </td>
                </tr>
                <tr>
                  <td className="align-top">サービスの提供時期</td>
                  <td>決済完了後、即時にプレミアム会員機能がご利用いただけます。</td>
                </tr>
                <tr>
                  <td className="align-top">返品・キャンセルに関する特約</td>
                  <td>
                    <p className="!mb-3">
                      <strong>■ 原則</strong><br />
                      デジタルコンテンツおよびサブスクリプションサービスの性質上、お客様都合による返品・返金・キャンセルには応じかねます。
                    </p>
                    <p className="!mb-3">
                      <strong>■ 契約不適合時の対応</strong><br />
                      当方の責に帰すべき事由によりサービスが提供できない場合（重大なバグによる機能不全等）、
                      サービス提供不能が発覚してから7日以内に上記メールアドレスまでご連絡いただければ、
                      個別に対応を協議いたします。
                    </p>
                    <p className="!mb-3">
                      <strong>■ Apple Media Servicesの返金ポリシー（iOS版）</strong><br />
                      App Store経由で購入されたサブスクリプションの返金処理は、Appleの
                      <a href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html" target="_blank" rel="noopener noreferrer">
                        Apple Media Services利用規約
                      </a>
                      に従います。<br />
                      返金をご希望の場合は、Apple サポート（
                      <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">
                        https://reportaproblem.apple.com/
                      </a>
                      ）へ直接お問い合わせください。
                    </p>
                    <p className="!mb-0">
                      <strong>■ Google Play の返金ポリシー（Android版）</strong><br />
                      Google Play経由で購入されたサブスクリプションの返金処理は、
                      <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer">
                        Google Play 利用規約
                      </a>
                      に従います。<br />
                      返金をご希望の場合は、Google Play ヘルプ（
                      <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">
                        https://support.google.com/googleplay/answer/2479637
                      </a>
                      ）から直接お手続きください。
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="align-top">サブスクリプションの解約</td>
                  <td>
                    <p className="!mb-3">
                      サブスクリプションの解約は、App Store または Google Play の設定画面から、お客様ご自身で行っていただく必要があります。
                    </p>
                    <p className="!mb-3">
                      <strong>【解約手順（iPhone / iOS版）】</strong><br />
                      1. iPhoneの「設定」アプリを開く<br />
                      2. 一番上のApple IDをタップ<br />
                      3. 「サブスクリプション」をタップ<br />
                      4. 「スタンドメイト」を選択<br />
                      5. 「サブスクリプションをキャンセルする」をタップ
                    </p>
                    <p className="!mb-3">
                      <strong>【解約手順（Android版）】</strong><br />
                      1. 「Google Play ストア」アプリを開く<br />
                      2. 右上のプロフィールアイコンをタップ<br />
                      3. 「お支払いと定期購入」→「定期購入」をタップ<br />
                      4. 「スタンドメイト」を選択<br />
                      5. 「定期購入を解約」をタップし、画面の指示に従う
                    </p>
                    <p className="text-sm !text-gray-400 !mb-0">
                      ※解約後も、購入済みの期間が終了するまでプレミアム会員機能をご利用いただけます。<br />
                      ※当アプリの運営者側では、お客様のサブスクリプションを直接キャンセルすることはできません。
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="align-top">自動更新について</td>
                  <td>
                    プレミアム会員のサブスクリプションは自動更新されます。<br />
                    お客様が解約手続きを行わない限り、購入期間の終了時に自動的に同じ期間で更新され、iOS版の場合は Apple ID、Android版の場合は Google アカウントに登録された決済手段へ課金が継続されます。<br />
                    <span className="text-sm text-gray-400">※自動更新を停止したい場合は、上記「サブスクリプションの解約」手順に従ってください。</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>開示請求について</h2>
          <p>
            本表記において、バーチャルオフィスの住所・電話番号を記載している場合、
            お取引時にお客様からご請求があれば、遅滞なく詳細な連絡先情報を開示いたします。
          </p>
          <p>
            開示請求は、上記メールアドレス（
            <a href="mailto:info@standmate.jp">info@standmate.jp</a>
            ）までご連絡ください。
          </p>
        </section>

        <section className="!mb-0 border-t border-gray-100 pt-8">
          <p className="text-center !text-gray-400">制定日：2025年10月14日</p>
        </section>
      </div>
    </div>
  );
}
