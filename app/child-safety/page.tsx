import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "児童の安全に関する基準（CSAE/CSAM対策）",
  description:
    "スタンドメイトにおける児童の性的虐待・搾取（CSAE）および児童性的虐待コンテンツ（CSAM）に対する基本方針、通報窓口、対応手順について記載しています。",
  alternates: { canonical: "/child-safety" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://standmate.jp" },
    { "@type": "ListItem", position: 2, name: "児童の安全に関する基準", item: "https://standmate.jp/child-safety" },
  ],
};

export default function ChildSafety() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="subpage-container">

        <h1>児童の安全に関する基準（CSAE/CSAM対策方針）</h1>

        <section>
          <p>
            中根大輔（以下「当方」）は、「スタンドメイト」（以下「本サービス」）の提供にあたり、
            児童の性的虐待・搾取（Child Sexual Abuse and Exploitation: CSAE）および
            児童性的虐待コンテンツ（Child Sexual Abuse Material: CSAM）を断固として許容しません。
            本ページでは、本サービスにおける児童の安全を守るための基本方針、予防策、通報窓口、ならびに違反発生時の対応手順を定めます。
          </p>
          <p>
            本方針は、Google Play ストアの「子どもの性的虐待および搾取の防止（CSAE）ポリシー」、
            Apple App Store Review Guidelines、日本国の「児童買春、児童ポルノに係る行為等の規制及び処罰並びに児童の保護等に関する法律」（児童ポルノ禁止法）、
            その他関連する国際的な児童保護基準に準拠します。
          </p>
        </section>

        <section>
          <h2>第1条（基本方針：ゼロトレランス）</h2>
          <p>当方は、本サービス上における以下の行為・コンテンツに対して、一切の例外なく厳正に対処します（ゼロトレランス方針）。</p>
          <ul className="list-disc">
            <li>児童（18歳未満の者）を性的に描写、暗示、または示唆する画像、動画、テキスト、その他一切のコンテンツの投稿、送信、共有</li>
            <li>児童に対するグルーミング（信頼関係を構築した上で性的搾取を目的として接触する行為）</li>
            <li>児童の性的搾取、人身売買、児童買春を目的とした勧誘、斡旋、取引</li>
            <li>児童に対する性的な接触、性的会話、わいせつな要求</li>
            <li>実在しない児童を描いたものを含む、児童を性的対象化するあらゆる生成物（AI生成画像、イラスト、アニメ等を含む）</li>
            <li>本サービスを児童の性的搾取目的のために利用する行為全般</li>
          </ul>
          <p>
            上記に該当する行為・コンテンツを確認した場合、当方は事前警告なしにアカウントを即時停止・永久削除し、
            関連データを保全した上で日本の警察当局および関係法執行機関へ通報します。
          </p>
        </section>

        <section>
          <h2>第2条（利用年齢制限）</h2>
          <p>本サービスは<strong>18歳以上の方のみ</strong>ご利用いただけます。18歳未満の方のご利用は一切禁止しています。</p>
          <ul className="list-disc">
            <li>利用登録時に生年月日および18歳以上であることの確認を求めています。</li>
            <li>虚偽の年齢申告によるアカウント登録が判明した場合、ただちにアカウントを停止します。</li>
            <li>18歳未満の利用が疑われるアカウントについては、追加の年齢確認を行う場合があります。</li>
            <li>保護者の方が未成年者による本サービスの利用に気付かれた場合は、速やかに下記窓口までご連絡ください。</li>
          </ul>
        </section>

        <section>
          <h2>第3条（予防措置）</h2>
          <p>当方は、CSAE/CSAMの発生を未然に防止するため、以下の技術的・運用的措置を講じています。</p>

          <h3>3.1 技術的対策</h3>
          <ul className="list-disc">
            <li>投稿画像に対する自動スキャンおよび不適切コンテンツ検知システムの運用</li>
            <li>プロフィール・メッセージ等に含まれる禁止ワードのフィルタリング</li>
            <li>不審なアカウント行動（短時間での大量メッセージ送信、複数アカウントの連続作成等）の自動検知</li>
            <li>既知のCSAMハッシュ値との照合による検知（必要に応じ外部サービスを活用）</li>
          </ul>

          <h3>3.2 運用的対策</h3>
          <ul className="list-disc">
            <li>利用規約における児童保護条項の明示と、違反時の厳格な対処</li>
            <li>ユーザーによる通報機能（報告ボタン）の提供</li>
            <li>報告されたコンテンツ・アカウントに対する迅速な人的レビュー</li>
            <li>CSAE/CSAM関連の通報を最優先で処理する運用体制の維持</li>
          </ul>
        </section>

        <section>
          <h2>第4条（通報・報告窓口）</h2>
          <p>
            本サービス上でCSAE/CSAMに該当する疑いのあるコンテンツ、アカウント、または行為を発見された場合は、
            直ちに以下のいずれかの方法でご報告ください。当方は、すべての報告を真摯に受け止め、最優先で対応します。
          </p>

          <h3>4.1 アプリ内通報</h3>
          <ul className="list-disc">
            <li>該当ユーザーのプロフィール画面または投稿・メッセージから「報告」機能をご利用ください。</li>
            <li>報告理由として「児童の安全に関わる問題」を選択してください。</li>
          </ul>

          <h3>4.2 専用メール窓口</h3>
          <div className="info-box">
            <p className="!text-gray-700 font-semibold">児童の安全に関する通報窓口：</p>
            <p>
              メールアドレス：
              <a href="mailto:info@standmate.jp?subject=%E5%85%90%E7%AB%A5%E3%81%AE%E5%AE%89%E5%85%A8%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E9%80%9A%E5%A0%B1">
                info@standmate.jp
              </a>
            </p>
            <p className="text-sm !text-gray-400 !mb-0">
              件名に「児童の安全に関する通報」と明記し、以下の情報をできる範囲でご記載ください：
              <br />・対象ユーザーのID、ニックネーム
              <br />・該当するコンテンツ・メッセージの内容または発生日時
              <br />・スクリーンショット等の証拠（添付可能な場合）
              <br />・通報者のご連絡先（任意。匿名での通報も受け付けます）
            </p>
          </div>

          <h3>4.3 外部通報先</h3>
          <p>緊急性の高い事案、または日本国外の関係機関への通報をご希望の場合は、以下もご活用いただけます。</p>
          <ul className="list-disc">
            <li>
              <strong>警察（日本国内）</strong>：緊急時 110 番／サイバー犯罪相談窓口（各都道府県警察）
            </li>
            <li>
              <strong>インターネット・ホットラインセンター（IHC）</strong>：
              <a href="https://www.internethotline.jp/" target="_blank" rel="noopener noreferrer">https://www.internethotline.jp/</a>
            </li>
            <li>
              <strong>NCMEC CyberTipline（米国・国際）</strong>：
              <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer">https://report.cybertip.org/</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>第5条（通報受付後の対応手順）</h2>
          <p>当方は、CSAE/CSAMに関する通報を受領した場合、以下の手順により迅速に対応します。</p>
          <ol className="list-decimal">
            <li><strong>受付・初動確認（24時間以内）</strong>：通報内容を確認し、緊急性を判定します。</li>
            <li><strong>証拠保全</strong>：関連するアカウント情報、コンテンツ、通信ログ等を法的要請に備えて保全します。</li>
            <li><strong>アカウント停止</strong>：明白な違反が認められる場合、事前通知なしに対象アカウントを即時停止します。</li>
            <li><strong>コンテンツ削除</strong>：CSAMに該当するコンテンツを本サービスから完全に削除します。</li>
            <li><strong>関係機関への通報</strong>：日本の警察および必要に応じて NCMEC 等の国際機関に通報します。</li>
            <li><strong>捜査協力</strong>：法執行機関からの正式な要請に応じ、法令の範囲内でデータ提供等の協力を行います。</li>
            <li><strong>再発防止措置</strong>：違反事例を分析し、検知ルール・運用の改善に反映します。</li>
          </ol>
          <p>
            なお、通報者のプライバシーは厳格に保護します。通報者の身元が対象ユーザー本人または第三者に開示されることはありません
            （法令により開示が義務付けられる場合を除きます）。
          </p>
        </section>

        <section>
          <h2>第6条（法執行機関への協力）</h2>
          <p>
            当方は、児童の性的搾取に関わる犯罪行為が疑われる場合、日本国の法令（児童ポルノ禁止法、刑法、プロバイダ責任制限法等）に従い、
            警察その他の法執行機関の正式な要請に基づき、保有するユーザー情報、通信ログ、コンテンツ等を提供します。
          </p>
          <p>
            また、捜査機関からの照会に迅速に対応するため、関連データを必要な期間保全します。
            この際、プライバシーポリシー第7条の第三者提供の例外規定（法令に基づく場合）が適用されます。
          </p>
        </section>

        <section>
          <h2>第7条（違反者に対する措置）</h2>
          <p>本方針に違反したユーザーに対し、当方は以下の措置を単独または組み合わせて実施します。</p>
          <ul className="list-disc">
            <li>アカウントの即時かつ永久的な停止・削除</li>
            <li>同一人物による再登録の技術的防止（端末識別情報等によるブロック）</li>
            <li>関係法執行機関への通報</li>
            <li>必要に応じた民事上の損害賠償請求</li>
            <li>関連プラットフォーム（Apple、Google 等）への事案共有（規約に基づく）</li>
          </ul>
        </section>

        <section>
          <h2>第8条（担当責任者）</h2>
          <div className="info-box">
            <table>
              <tbody>
                <tr>
                  <td>児童安全担当責任者</td>
                  <td>中根大輔</td>
                </tr>
                <tr>
                  <td>連絡先</td>
                  <td><a href="mailto:info@standmate.jp">info@standmate.jp</a></td>
                </tr>
                <tr>
                  <td>対応時間</td>
                  <td>原則として受領後24時間以内に初動対応を開始します。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>第9条（ユーザーの皆様へのお願い）</h2>
          <p>児童の安全を守るためには、ユーザーの皆様のご協力が不可欠です。以下の点にご留意ください。</p>
          <ul className="list-disc">
            <li>本サービス上で児童の安全を脅かす疑いのある行為・コンテンツを見かけた場合は、ためらわずに通報してください。</li>
            <li>18歳未満の方が本サービスを利用していると思われる場合も、通報の対象となります。</li>
            <li>通報は匿名でも受け付けており、通報したことを理由に不利益な扱いを受けることは一切ありません。</li>
            <li>ご自身のお子様・未成年者が本サービスを誤って利用していることに気付かれた場合、保護者の方から直接ご連絡いただければアカウント削除等の対応を行います。</li>
          </ul>
        </section>

        <section>
          <h2>第10条（関連規程・関連法令）</h2>
          <ul className="list-disc">
            <li>本サービス <a href="/terms">利用規約</a></li>
            <li>本サービス <a href="/privacy">プライバシーポリシー</a></li>
            <li>児童買春、児童ポルノに係る行為等の規制及び処罰並びに児童の保護等に関する法律（児童ポルノ禁止法）</li>
            <li>刑法（わいせつ物頒布等の罪、強制わいせつ罪等）</li>
            <li>特定電気通信役務提供者の損害賠償責任の制限及び発信者情報の開示に関する法律（プロバイダ責任制限法）</li>
            <li>Google Play Developer Program Policies – Child Safety Standards</li>
            <li>Apple App Store Review Guidelines – Safety</li>
          </ul>
        </section>

        <section>
          <h2>第11条（方針の改定）</h2>
          <p>
            当方は、法令の改正、運用上の必要性、技術の進展等に応じて本方針を随時見直し、改定します。
            重要な変更を行う場合は、本サービス内での通知または本ページへの掲載により、ユーザーの皆様にお知らせします。
          </p>
        </section>

        <section className="!mb-0 border-t border-gray-100 pt-8">
          <p className="text-center !text-gray-500">制定日：2026年4月14日</p>
          <p className="text-center text-sm !text-gray-400">スタンドメイト 児童安全基準</p>
        </section>
      </div>
    </div>
  );
}
