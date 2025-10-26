export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">利用規約</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <p className="text-gray-600 mb-8">
            この利用規約（以下「本規約」）は、中根大輔（以下「当方」）が提供する「スタンドメイト」（以下「本アプリ」または「本サービス」）の利用条件を定めるものです。
            ユーザーの皆様（以下「ユーザー」）は、本サービスをご利用いただく際には、本規約に同意いただいたものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
          <p className="mb-4">
            本規約は、本サービスの提供条件および本サービスの利用に関する当方とユーザーとの間の権利義務関係を定めることを目的とし、
            ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
          <p>
            本アプリは、App Store経由で配信されるため、
            <a
              href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple Media Services利用規約
            </a>
            に含まれるApp Storeの標準エンドユーザーライセンス契約（Standard EULA）も同時に適用されます。
            本規約とApple EULAの間に矛盾がある場合は、本規約が優先して適用されます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第2条（定義）</h2>
          <p className="mb-4">本規約において、以下の用語はそれぞれ以下の意味を持ちます。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>「本サービス」</strong>：当方が提供する「スタンドメイト」という名称のアプリケーションおよび関連するすべてのサービスを意味します。</li>
            <li><strong>「ユーザー」</strong>：本サービスを利用するすべての個人を意味します。</li>
            <li><strong>「プロフィール」</strong>：ユーザーが本サービスに登録する個人情報（写真、ニックネーム、自己紹介等）を意味します。</li>
            <li><strong>「マッチング」</strong>：相互にいいねをしたユーザー同士が連絡できる状態になることを意味します。</li>
            <li><strong>「プレミアム会員」</strong>：有料プラン（サブスクリプション）に登録したユーザーを意味します。</li>
            <li><strong>「コンテンツ」</strong>：ユーザーが本サービス上に投稿または送信するテキスト、画像、その他一切の情報を意味します。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第3条（利用資格）</h2>
          <p className="mb-4">本サービスの利用には以下の条件を満たす必要があります。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>18歳以上であること（18歳未満の場合は保護者の同意が必要）</li>
            <li>本規約およびプライバシーポリシーに同意できること</li>
            <li>過去に本サービスから利用停止処分を受けていないこと</li>
            <li>反社会的勢力に属していないこと、および反社会的勢力との関わりがないこと</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第4条（アカウント登録）</h2>
          <p className="mb-4">
            ユーザーは、本サービスの利用にあたり、正確かつ最新の情報を登録する必要があります。
            虚偽の情報を登録した場合、当方はユーザーのアカウントを予告なく削除することができます。
          </p>
          <p className="mb-4">
            1人のユーザーが複数のアカウントを作成することは禁止されています。
          </p>
          <p>
            ユーザーは、自己の責任においてアカウント情報を適切に管理するものとし、
            第三者による不正使用が判明した場合は、直ちに当方に通知するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第5条（禁止事項）</h2>
          <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為、または犯罪を助長・誘発する行為</li>
            <li>他のユーザーまたは第三者の権利（知的財産権、プライバシー権、名誉権等）を侵害する行為</li>
            <li>他のユーザーに対する嫌がらせ、誹謗中傷、差別的発言</li>
            <li>虚偽の情報を掲載する行為</li>
            <li>他人の写真を無断で使用する行為</li>
            <li>商業目的の勧誘や宣伝、スパム行為</li>
            <li>他の出会い系サイト・アプリへの誘導</li>
            <li>金銭の要求、貸借の申し込み、または金銭的な詐欺行為</li>
            <li>性的な内容を含むメッセージの送信、わいせつな画像の投稿</li>
            <li>ストーカー行為、つきまといまたは過度な連絡</li>
            <li>複数アカウントの作成または他人へのなりすまし</li>
            <li>不正アクセス、アプリの改ざん、リバースエンジニアリング</li>
            <li>本サービスのサーバーやネットワークに過度な負荷をかける行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>その他、当方が不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第6条（ユーザー生成コンテンツの管理）</h2>

          <h3 className="text-xl font-semibold mb-3">6.1 不適切なコンテンツに対する方針</h3>
          <p className="mb-4">
            本サービスは、すべてのユーザーが安全かつ快適に利用できる環境を提供することを最優先としています。
          </p>
          <p className="mb-4">
            <strong>不適切なコンテンツや迷惑行為に対しては、ゼロトレランス（一切の容認をしない）の方針を採用しています。</strong>
            違反が確認された場合は、警告なしでアカウントを停止・削除します。
          </p>

          <h3 className="text-xl font-semibold mb-3">6.2 コンテンツの監視とフィルタリング</h3>
          <p className="mb-4">
            当方は、本サービスの安全性を確保するため、以下の方法で不適切なコンテンツを監視・フィルタリングします。
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>ユーザーからの通報に基づく人的審査</li>
            <li>AIによる自動検出（段階的に導入予定）</li>
            <li>定期的なパトロール</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">6.3 通報機能</h3>
          <p className="mb-4">
            ユーザーは、不適切なコンテンツや迷惑ユーザーを発見した場合、アプリ内の通報機能を使用して当方に報告することができます。
          </p>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">【通報方法】</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ホーム画面のプロフィール詳細右上の「…」メニューから「通報」を選択</li>
              <li>募集詳細画面右上の「…」メニューから「通報」を選択</li>
              <li>メッセージ画面右上の「…」メニューから「通報」を選択</li>
            </ul>
          </div>

          <p className="mb-4">
            <strong>通報を受けた内容は、24時間以内に確認し、規約違反と判断した場合は以下の措置を講じます。</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>不適切なコンテンツの即時削除</li>
            <li>違反ユーザーのアカウント停止または永久削除</li>
            <li>悪質な場合は警察など関係機関への通報</li>
          </ul>

          <p className="mb-4">
            なお、虚偽の通報や嫌がらせ目的の通報を繰り返し行った場合、通報者自身がアカウント停止の対象となります。
          </p>

          <h3 className="text-xl font-semibold mb-3">6.4 ブロック機能</h3>
          <p className="mb-4">
            ユーザーは、特定のユーザーをブロックすることで、そのユーザーとの一切の接触を遮断できます。
          </p>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">【ブロック方法】</p>
            <p>メッセージ画面右上の「…」メニューから「ブロック」を選択</p>
          </div>

          <p className="mb-4">ブロック後、以下の効果があります。</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>ブロックしたユーザーからのメッセージを受信しなくなります</li>
            <li>ブロックしたユーザーの観戦募集が表示されなくなります</li>
            <li>ブロックしたユーザーがあなたのプロフィールを閲覧できなくなります</li>
            <li>ブロックしたユーザーとのマッチングが解除されます</li>
            <li>ブロックは相手に通知されません</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第7条（プレミアム会員サブスクリプション）</h2>

          <h3 className="text-xl font-semibold mb-3">7.1 プレミアム会員の特典</h3>
          <p className="mb-4">プレミアム会員は、以下の特典を利用できます。</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>1日のいいねとスキップ回数が30回に増加（無料会員は5回/日）</li>
            <li>観戦募集への参加希望が20回/日に増加（無料会員は3回/日）</li>
            <li>募集を表示する性別の選択が可能</li>
            <li>プロフィールを表示する性別の選択が可能</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">7.2 料金と支払い</h3>
          <p className="mb-4">
            プレミアム会員の料金は<strong>月額1,000円（税込）</strong>です。
          </p>
          <p className="mb-4">
            支払いは、App Store経由で行われます。決済方法は、ユーザーのApple IDに登録された支払方法（クレジットカード、デビットカード、App Storeギフトカード等）が使用されます。
          </p>
          <p className="mb-4">
            当方は、決済情報を直接取り扱いません。すべての決済処理はApple Inc.によって管理されます。
          </p>

          <h3 className="text-xl font-semibold mb-3">7.3 自動更新</h3>
          <p className="mb-4">
            プレミアム会員のサブスクリプションは<strong>自動更新</strong>されます。
          </p>
          <p className="mb-4">
            ユーザーが解約手続きを行わない限り、購入期間の終了時に自動的に同じ期間で更新され、課金が継続されます。
            更新日の24時間以内に、ユーザーのApple IDに自動的に課金されます。
          </p>

          <h3 className="text-xl font-semibold mb-3">7.4 解約（キャンセル）方法</h3>
          <p className="mb-4">
            サブスクリプションの解約は、<strong>App Storeの設定画面から、ユーザー自身で行っていただく必要があります。</strong>
            当方では、ユーザーのサブスクリプションを直接キャンセルすることはできません。
          </p>
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">【解約手順（iPhone）】</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>iPhoneの「設定」アプリを開く</li>
              <li>画面上部のApple ID（氏名）をタップ</li>
              <li>「サブスクリプション」をタップ</li>
              <li>「スタンドメイト」を選択</li>
              <li>「サブスクリプションをキャンセルする」をタップ</li>
            </ol>
          </div>
          <p className="mb-4">
            解約後も、購入済みの期間が終了するまで、プレミアム会員の特典をご利用いただけます。
          </p>
          <p className="mb-4">
            サブスクリプションは、現在の購入期間が終了する少なくとも24時間前までにキャンセルしない限り、自動的に更新されます。
          </p>

          <h3 className="text-xl font-semibold mb-3">7.5 返金ポリシー</h3>
          <p className="mb-4">
            デジタルコンテンツおよびサブスクリプションサービスの性質上、原則として、一度支払われた料金の返金は行いません。
          </p>
          <p className="mb-4">
            ただし、App Store経由で購入されたサブスクリプションの返金処理は、Appleの
            <a
              href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple Media Services利用規約
            </a>
            に従います。
          </p>
          <p className="mb-4">
            返金をご希望の場合は、Appleサポート（
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
          <p>
            当方の責に帰すべき事由によりサービスが提供できない場合（重大なバグによる機能不全等）、
            個別に対応を協議いたしますので、
            <a href="mailto:support@standmate.app" className="text-blue-600 hover:underline">
              support@standmate.app
            </a>
            までご連絡ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第8条（知的財産権）</h2>
          <p className="mb-4">
            本サービス（アプリのデザイン、ソースコード、ロゴ、商標等）に関する知的財産権は、すべて当方またはライセンサーに帰属します。
          </p>
          <p className="mb-4">
            ユーザーが本サービスに投稿したコンテンツ（写真、テキスト等）の著作権は、ユーザーに帰属します。
          </p>
          <p>
            ただし、ユーザーは当方に対して、当該コンテンツを本サービス内で使用（複製、表示、送信等）する権利を、
            無償かつ非独占的に許諾するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第9条（利用制限および登録抹消）</h2>
          <p className="mb-4">
            当方は、ユーザーが以下のいずれかに該当する場合、事前の通知または催告なく、
            当該ユーザーに対して本サービスの利用を一時的に制限し、またはアカウントを削除（登録抹消）することができます。
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>本規約のいずれかの条項に違反した場合</li>
            <li>登録情報に虚偽の事実があることが判明した場合</li>
            <li>他のユーザーから複数の苦情や通報があった場合</li>
            <li>料金の支払債務の不履行があった場合</li>
            <li>当方からの連絡に対し、相当期間内に応答がない場合</li>
            <li>第3条に定める利用資格を満たさないことが判明した場合</li>
            <li>その他、当方が本サービスの利用を適当でないと判断した場合</li>
          </ul>
          <p className="mb-4">
            利用制限または登録抹消により、ユーザーに損害が発生した場合でも、当方は一切の責任を負いません。
          </p>
          <p>
            登録抹消後も、ユーザーは当方に対して負担する債務の一切の支払義務を免れるものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第10条（免責事項）</h2>
          <p className="mb-4">当方は、以下について一切の責任を負いません。</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>本サービスを通じて知り合ったユーザー間のトラブル、紛争、事件・事故</li>
            <li>ユーザーが投稿したコンテンツの内容、正確性、合法性</li>
            <li>本サービスの中断、停止、終了、または内容の変更によって生じた損害</li>
            <li>システム障害、メンテナンス、通信環境の不具合による一時的な利用不可</li>
            <li>外部サービス（Supabase、Expo、Apple等）の障害による影響</li>
            <li>ユーザーのデバイスの故障、紛失、盗難によるデータの消失</li>
            <li>第三者による不正アクセス、ハッキング、コンピューターウイルス等による被害</li>
          </ul>
          <p className="mb-4">
            本サービスは「現状有姿」で提供されるものであり、当方は、本サービスが特定の目的に適合すること、
            期待する機能・正確性を有すること、不具合が生じないこと等について、いかなる保証も行いません。
          </p>
          <p>
            ユーザーは自己の責任において本サービスを利用するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第11条（損害賠償の制限）</h2>
          <p className="mb-4">
            当方の債務不履行または不法行為によりユーザーに損害が生じた場合、
            当方が賠償する損害の範囲は、当該ユーザーが直近1年間に当方に支払った利用料金の総額を上限とします。
          </p>
          <p>
            ただし、当方に故意または重大な過失がある場合は、この限りではありません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第12条（サービスの変更・終了）</h2>
          <p className="mb-4">
            当方は、ユーザーへの事前の通知なく、本サービスの内容を変更、追加、削除することができます。
          </p>
          <p>
            当方は、事前に通知することにより、本サービスの提供を終了することができます。
            サービス終了の場合、当方は合理的な期間（原則として30日以上）の予告期間を設けるよう努めます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第13条（利用規約の変更）</h2>
          <p className="mb-4">
            当方は、必要と判断した場合、本規約を変更することができます。
          </p>
          <p className="mb-4">
            変更後の利用規約は、本ページまたはアプリ内に掲載した時点で効力を生じます。
          </p>
          <p className="mb-4">
            重要な変更がある場合、または変更によりユーザーに不利益が生じる場合は、
            変更内容を事前にアプリ内通知またはメールにてユーザーにお知らせいたします。
          </p>
          <p>
            変更後もユーザーが本サービスを継続して利用した場合、変更後の利用規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第14条（個人情報の取扱い）</h2>
          <p>
            本サービスにおける個人情報の取扱いについては、当方が別途定める
            <a href="/privacy" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </a>
            に従うものとします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第15条（準拠法・裁判管轄）</h2>
          <p className="mb-4">
            本規約の解釈にあたっては、日本法を準拠法とします。
          </p>
          <p>
            本サービスに関して紛争が生じた場合、当方の所在地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">第16条（お問い合わせ）</h2>
          <p className="mb-4">
            本規約に関するご質問、または本サービスに関するお問い合わせは、以下までご連絡ください。
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="mb-2">
              <strong>アプリ名：</strong> スタンドメイト
            </p>
            <p>
              <strong>メールアドレス：</strong>{' '}
              <a href="mailto:support@standmate.app" className="text-blue-600 hover:underline">
                support@standmate.app
              </a>
            </p>
          </div>
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
