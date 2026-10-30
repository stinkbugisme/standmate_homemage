import type { Metadata } from "next";
import Link from "next/link";
import Phrase from "../components/Phrase";
import { MailIcon, WarningIcon, DocumentIcon, LockIcon, ScaleIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "サポート・FAQ",
  description:
    "スタンドメイトのよくある質問と回答、お問い合わせ方法をご案内します。",
  alternates: { canonical: "/support" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "アカウントを削除したい",
      acceptedAnswer: {
        "@type": "Answer",
        text: "アプリを開いてマイページを開き、一番下の「アカウントを削除」を押すとアカウントを削除できます。",
      },
    },
    {
      "@type": "Question",
      name: "プレミアム会員の解約方法",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iPhoneの「設定」アプリ →（一番上の）自分の名前 →「サブスクリプション」→「スタンドメイト」→「サブスクリプションをキャンセル」の順に進んでください。Androidの場合は「Google Play ストア」アプリ → 右上のプロフィールアイコン →「お支払いと定期購入」→「定期購入」→「スタンドメイト」→「定期購入を解約」の順に進んでください。解約後も、購入済みの期間が終わるまではプレミアム会員の機能を使えます。",
      },
    },
    {
      "@type": "Question",
      name: "不適切なユーザーを見つけた",
      acceptedAnswer: {
        "@type": "Answer",
        text: "アプリ内の通報機能をご利用ください。相手のプロフィール、トーク画面、募集の詳細画面の右上「…」メニューから「通報する」を選べます。通報した相手は自動でブロックされます。アプリ内通報が使えない場合は info@standmate.jp までメールでもご報告いただけます。通報内容は24時間以内に確認し、適切な対応を行います。",
      },
    },
    {
      "@type": "Question",
      name: "チケット譲渡でトラブルに遭わないためには？（先払い詐欺への注意）",
      acceptedAnswer: {
        "@type": "Answer",
        text: "スタンドメイトはユーザー間の金銭授受・チケット売買を仲介する機能を提供していません。チケットの入手は、チケットぴあ、ローソンチケット、e+、球団公式サイト、公式トレード機能など正規ルートのご利用を強く推奨します。やむを得ず個人間で譲り受ける場合は、PayPay送金や銀行振込による「先払い」は避け、球場入場ゲート前などでの当日現物確認後の支払いを検討してください。本人確認書類の画像提示は本人性の証明にはなりません（偽造・流用されるリスクがあります）。国民生活センターも繰り返し注意喚起している類型の詐欺です。",
      },
    },
    {
      "@type": "Question",
      name: "チケット詐欺などの金銭トラブルに遭ってしまった",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず利用した決済サービス（PayPay等）のサポートに速やかに被害報告してください。次に最寄りの警察（サイバー犯罪相談窓口）または110番、消費者ホットライン188へご相談ください。スタンドメイト運営には info@standmate.jp もしくはアプリ内通報機能から、対象ユーザーのニックネーム・発生日時・証拠画像を添えてご報告いただければ、該当アカウントについて規約に基づく措置（永久停止等）を行います。なお、被害金銭の返還・取り戻しは運営の業務範囲外となります。",
      },
    },
    {
      "@type": "Question",
      name: "マッチングしたユーザーとメッセージができない",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インターネット接続が正常か確認し、アプリを最新バージョンにアップデートしてから再起動してください。それでも解決しない場合は、サポートまでお問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "購入の復元ができない",
      acceptedAnswer: {
        "@type": "Answer",
        text: "プレミアム会員の画面にある「購入を復元」ボタンを押してください。それでも復元できない場合は、購入したときと同じApple ID（iPhone）またはGoogleアカウント（Android）でストアにログインしているかご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "通話がつながらない、相手に声が届かない",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はじめて通話するときに「マイクの使用」を許可していないと、相手に声が届きません。iPhoneは「設定」→「スタンドメイト」→「マイク」、Androidは「設定」→「アプリ」→「スタンドメイト」→「権限」→「マイク」から許可してください。あわせて、電波の良い場所で、アプリを最新バージョンにしてお試しください。",
      },
    },
    {
      "@type": "Question",
      name: "通話できる時間と、元に戻るタイミングは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "通話は、かけた人の1日の通話時間を使います。通話時間は毎朝3時に元に戻ります。2026年12月31日までは特別期間で、無料会員もプレミアム会員も1日60分使えます。2027年1月1日からは、無料会員が1日15分、プレミアム会員が1日90分になります。",
      },
    },
    {
      "@type": "Question",
      name: "だれと通話できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "トークができる相手と通話できます（マッチした相手、観戦募集で参加が決まった相手）。トーク画面の右上の電話マークからかけられます。電話番号を相手に教える必要はありません。",
      },
    },
    {
      "@type": "Question",
      name: "「通話で観戦」とは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "観戦募集の種類のひとつで、はなれた場所から、通話しながら一緒に試合を観る募集です。球場に行けない日でも、同じ球団のファンと一緒に応援できます。参加したいときは「通話したい！」を押します。",
      },
    },
    {
      "@type": "Question",
      name: "トークで写真や動画は送れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "送れます。トーク画面から、写真や動画を選んで送信できます。",
      },
    },
    {
      "@type": "Question",
      name: "1年プランはいつから使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1年プラン（10,000円・税込）は2027年1月1日から提供します。1ヶ月プラン（1,000円・税込）の12ヶ月分より2,000円おトクです。",
      },
    },
    {
      "@type": "Question",
      name: "2027年から無料で使える回数は変わりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2027年1月1日から、1日に使える回数・時間が変わります。無料会員は、いいね・スキップ3回、行きたい！1回、通話15分。プレミアム会員は、いいね・スキップ30回、行きたい！無制限、通話90分です。",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "サポート・FAQ", item: "https://standmate.jp/support" },
  ],
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">

        <h1>サポート</h1>

        {/* Ticket scam alert */}
        <section>
          <div className="border-2 border-red-300 bg-red-50 rounded-xl p-6">
            <h2 className="!text-red-600 !mt-0 flex items-center gap-2">
              <WarningIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
              チケット譲渡・金銭トラブルにご注意ください
            </h2>
            <p className="!text-gray-700">
              スタンドメイトは、ユーザー間のマッチング・交流の場を提供するサービスであり、
              <strong>ユーザー間の金銭授受・チケット売買を仲介する機能は提供していません</strong>。
              観戦募集を通じて知り合った相手との取引は、すべて<strong>ユーザーご自身の責任</strong>で行っていただくことになります。
            </p>
            <p className="!text-gray-700 font-semibold !mb-2"><Phrase>{"よくある詐欺の手口（国民生活センターからも注意喚起されています）"}</Phrase></p>
            <ul className="list-disc !text-gray-700">
              <li>SNSやアプリで「チケットを譲る」と持ちかけられ、PayPay送金や銀行振込で<strong>先払い</strong>した後、相手と連絡が取れなくなる</li>
              <li>本人確認書類（マイナンバーカード・免許証）の<strong>画像</strong>を見せられて信用したが、画像は偽造・流用されたものだった</li>
              <li><Phrase>{"受け取ったチケットが偽造・無効で、当日入場できない"}</Phrase></li>
            </ul>
            <p className="!text-gray-700 font-semibold !mb-2"><Phrase>{"安全にご利用いただくためのポイント"}</Phrase></p>
            <ul className="list-disc !text-gray-700 !mb-0">
              <li>チケットの入手は、チケットぴあ・ローソンチケット・e+・球団公式サイト・公式トレード機能など<strong>正規ルート</strong>を最優先で</li>
              <li>個人間でやり取りする場合は、<strong>先払い送金は避け</strong>、当日の現物確認後の支払いを検討</li>
              <li>少しでも不審な点があれば、取引前・取引後を問わず<Link href="/contact">お問い合わせフォーム</Link>または <a href="mailto:info@standmate.jp?subject=%E9%80%9A%E5%A0%B1">info@standmate.jp</a> まで通報してください</li>
              <li>被害に遭ってしまった場合は、利用した決済サービスのサポート／警察（サイバー犯罪相談窓口・110番）／消費者ホットライン<strong>188</strong>へ速やかにご相談ください</li>
            </ul>
            <p className="!text-gray-500 text-sm !mb-0 mt-4">
              詳細は<Link href="/terms">利用規約 第10条（ユーザー間の取引・金銭トラブルに関する免責および対処）</Link>をご確認ください。
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2>お問い合わせ</h2>
          <p><Phrase>{"アプリに関するご質問、不具合の報告、ご要望などがございましたら、お問い合わせフォームよりお気軽にご連絡ください。"}</Phrase></p>
          <div className="info-box">
            <Link href="/contact" className="flex items-center gap-3 text-lg font-semibold no-underline">
              <span className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <MailIcon className="w-5 h-5 text-white" />
              </span>
              お問い合わせフォームへ
            </Link>
          </div>
          <p className="text-sm !text-gray-400"><Phrase>{"※ 通常、24時間以内にご返信いたします。週末・祝日を挟む場合は、お時間をいただく場合がございます。"}</Phrase></p>
        </section>

        {/* FAQ */}
        <section>
          <h2>よくある質問（FAQ）</h2>

          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. アカウントを削除したい"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. アプリを開いてマイページを開き、一番下の「アカウントを削除」を押すとアカウントを削除できます。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. プレミアム会員の解約方法"}</Phrase></h3>
              <p className="!mb-0">
                A. <strong>iPhone</strong>：iPhoneの「設定」アプリ →（一番上の）自分の名前 →「サブスクリプション」→「スタンドメイト」→「サブスクリプションをキャンセル」の順に進んでください。
              </p>
              <p className="!mb-0 mt-2">
                <strong>Android</strong>：「Google Play ストア」アプリ → 右上のプロフィールアイコン →「お支払いと定期購入」→「定期購入」→「スタンドメイト」→「定期購入を解約」の順に進んでください。
              </p>
              <p className="!mb-0 mt-2 text-sm !text-gray-500"><Phrase>{"解約後も、購入済みの期間が終わるまではプレミアム会員の機能を使えます。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 不適切なユーザーを見つけた"}</Phrase></h3>
              <p className="!mb-0">
                A. アプリ内の通報機能をご利用ください。相手のプロフィール、トーク画面、募集の詳細画面の右上「…」メニューから「通報する」を選べます。通報した相手は自動でブロックされます。アプリ内通報が使えない場合は <a href="mailto:info@standmate.jp?subject=%E9%80%9A%E5%A0%B1">info@standmate.jp</a> までメールでもご報告いただけます。通報内容は24時間以内に確認し、適切な対応を行います。
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. チケット譲渡でトラブルに遭わないためには？（先払い詐欺への注意）"}</Phrase></h3>
              <p>
                A. スタンドメイトはユーザー間の金銭授受・チケット売買を<strong>仲介していません</strong>。
                観戦募集を通じて知り合った相手との取引はご自身の責任で行っていただきます。
              </p>
              <p className="!mb-2 font-semibold"><Phrase>{"【推奨】"}</Phrase></p>
              <ul className="list-disc">
                <li>チケットぴあ・ローソンチケット・e+・球団公式サイト・公式トレード機能など<strong>正規ルート</strong>の利用を最優先</li>
                <li>やむを得ず個人間で譲り受ける場合、<strong>PayPay送金や銀行振込による先払いは避ける</strong></li>
                <li><Phrase>{"球場入場ゲート前など、当日の現物確認後に支払う方法を検討"}</Phrase></li>
                <li>本人確認書類の<strong>画像</strong>を見せられても信用しない（偽造・流用の可能性あり）</li>
              </ul>
              <p className="!mb-0 text-sm !text-gray-500"><Phrase>{"国民生活センターも、SNSを介した個人間チケット取引で「代金支払後に連絡が取れなくなる」「チケットが届かない」等の相談が繰り返し寄せられていると注意喚起しています。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. チケット詐欺などの金銭トラブルに遭ってしまった"}</Phrase></h3>
              <p><Phrase>{"A. 以下の順でご対応ください。"}</Phrase></p>
              <ol className="list-decimal">
                <li>
                  <strong>利用した決済サービス（PayPay等）のサポートに被害報告</strong>
                  ：不正利用報告により、相手アカウントへの措置や調査が行われる場合があります。
                </li>
                <li>
                  <strong>警察への相談</strong>
                  ：最寄りの警察署またはサイバー犯罪相談窓口、緊急時は110番。被害届の提出をご検討ください。
                </li>
                <li>
                  <strong>消費者ホットライン「188」</strong>
                  ：最寄りの消費生活センター等をご案内する国民生活センターの電話窓口です。
                </li>
                <li>
                  <strong>スタンドメイト運営への通報</strong>
                  ：アプリ内通報機能、または <a href="mailto:info@standmate.jp?subject=%E9%80%9A%E5%A0%B1">info@standmate.jp</a> まで、対象ユーザーのニックネーム・発生日時・状況・証拠画像（スクリーンショット等）を添えてご連絡ください。規約違反と判断した場合、該当アカウントに永久停止等の措置を行います。
                </li>
              </ol>
              <p className="!mb-0 text-sm !text-gray-500">
                ※ 被害金銭の返還・取り戻しは運営の業務範囲外となります。あらかじめご了承ください。詳細は<Link href="/terms">利用規約 第10条</Link>をご確認ください。
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. マッチングしたユーザーとメッセージができない"}</Phrase></h3>
              <p><Phrase>{"A. 以下をご確認ください："}</Phrase></p>
              <ul className="list-disc">
                <li><Phrase>{"インターネット接続が正常か確認"}</Phrase></li>
                <li><Phrase>{"アプリを最新バージョンにアップデート"}</Phrase></li>
                <li><Phrase>{"アプリを再起動"}</Phrase></li>
              </ul>
              <p className="!mb-0"><Phrase>{"それでも解決しない場合は、サポートまでお問い合わせください。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 購入の復元ができない"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. プレミアム会員の画面にある「購入を復元」ボタンを押してください。それでも復元できない場合は、購入したときと同じApple ID（iPhone）またはGoogleアカウント（Android）でストアにログインしているかご確認ください。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 通話がつながらない、相手に声が届かない"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. はじめて通話するときに「マイクの使用」を許可していないと、相手に声が届きません。iPhoneは「設定」→「スタンドメイト」→「マイク」、Androidは「設定」→「アプリ」→「スタンドメイト」→「権限」→「マイク」から許可してください。あわせて、電波の良い場所で、アプリを最新バージョンにしてお試しください。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 通話できる時間と、元に戻るタイミングは？"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. 通話は、かけた人の1日の通話時間を使います。通話時間は毎朝3時に元に戻ります。2026年12月31日までは特別期間で、無料会員もプレミアム会員も1日60分使えます。2027年1月1日からは、無料会員が1日15分、プレミアム会員が1日90分になります。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. だれと通話できますか？"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. トークができる相手と通話できます（マッチした相手、観戦募集で参加が決まった相手）。トーク画面の右上の電話マークからかけられます。電話番号を相手に教える必要はありません。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 「通話で観戦」とは？"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. 観戦募集の種類のひとつで、はなれた場所から、通話しながら一緒に試合を観る募集です。球場に行けない日でも、同じ球団のファンと一緒に応援できます。参加したいときは「通話したい！」を押します。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. トークで写真や動画は送れますか？"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. 送れます。トーク画面から、写真や動画を選んで送信できます。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 1年プランはいつから使えますか？"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. 1年プラン（10,000円・税込）は2027年1月1日から提供します。1ヶ月プラン（1,000円・税込）の12ヶ月分より2,000円おトクです。"}</Phrase></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 hover:border-brand-200 transition-colors">
              <h3 className="!text-brand-500"><Phrase>{"Q. 2027年から無料で使える回数は変わりますか？"}</Phrase></h3>
              <p className="!mb-0"><Phrase>{"A. 2027年1月1日から、1日に使える回数・時間が変わります。無料会員は、いいね・スキップ3回、行きたい！1回、通話15分。プレミアム会員は、いいね・スキップ30回、行きたい！無制限、通話90分です。"}</Phrase></p>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section>
          <h2>関連リンク</h2>
          <div className="flex flex-col gap-3">
            <Link href="/terms" className="border border-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-brand-200 hover:bg-brand-50/30 no-underline">
              <DocumentIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <span className="!text-gray-700">利用規約</span>
            </Link>
            <Link href="/privacy" className="border border-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-brand-200 hover:bg-brand-50/30 no-underline">
              <LockIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <span className="!text-gray-700">プライバシーポリシー</span>
            </Link>
            <Link href="/legal" className="border border-gray-100 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-brand-200 hover:bg-brand-50/30 no-underline">
              <ScaleIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <span className="!text-gray-700">特定商取引法に基づく表記</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
