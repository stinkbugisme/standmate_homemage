# 週次イベント更新ガイド

毎週月曜朝、各球団の公式イベント情報を確認して `app/blog/posts.ts` の `events-guide-*-2026` を更新する。

## 更新手順

1. 下記の12球団公式ページを巡回
2. **直近2週間のイベント** を `## 📅 直近のイベント情報` セクションに反映
3. 該当記事の `updatedDate` を「今日の日付（YYYY-MM-DD）」に更新
4. commit & push

## 12球団イベント情報ソース一覧

### セ・リーグ

| 球団 | 公式イベント情報URL |
|---|---|
| 読売ジャイアンツ | https://www.giants.jp/G/event/ |
| 阪神タイガース | https://hanshintigers.jp/news/event/ |
| 中日ドラゴンズ | https://dragons.jp/event/ |
| 横浜DeNAベイスターズ | https://www.baystars.co.jp/event/ |
| 東京ヤクルトスワローズ | https://www.yakult-swallows.co.jp/event/ |
| 広島東洋カープ | https://www.carp.co.jp/event26/ |

### パ・リーグ

| 球団 | 公式イベント情報URL |
|---|---|
| 北海道日本ハムファイターズ | https://www.fighters.co.jp/event/ |
| 東北楽天ゴールデンイーグルス | https://www.rakuteneagles.jp/event/ |
| 埼玉西武ライオンズ | https://www.seibulions.jp/event/ |
| 千葉ロッテマリーンズ | https://www.marines.co.jp/event/ |
| オリックス・バファローズ | https://www.buffaloes.co.jp/event/ |
| 福岡ソフトバンクホークス | https://www.softbankhawks.co.jp/event/ |

**注**：URLは変更される可能性あり。リンク切れしたら公式サイトトップから探す。

## 対応記事一覧

| 球団 | slug |
|---|---|
| 巨人 | events-guide-giants-2026 |
| 阪神 | events-guide-tigers-2026 |
| 中日 | events-guide-dragons-2026 |
| DeNA | events-guide-baystars-2026 |
| ヤクルト | events-guide-swallows-2026 |
| 広島 | events-guide-carp-2026 |
| 日本ハム | events-guide-fighters-2026 |
| 楽天 | events-guide-eagles-2026 |
| 西武 | events-guide-lions-2026 |
| ロッテ | events-guide-marines-2026 |
| オリックス | events-guide-buffaloes-2026 |
| ソフトバンク | events-guide-hawks-2026 |

## 記事内の更新セクションテンプレート

各 `events-guide-*` 記事の先頭近くに以下のセクションを挿入する：

```markdown
## 📅 直近のイベント情報

### 今週〜来週の注目イベント
- 5/1（水）：○○デー（△△戦）
- 5/3（土）：ファン感謝祭（□□戦）

### 今月開催予定の主要イベント
- 5/10（土）：キッズデー
- 5/18（日）：レディースデー
```

## 更新時の注意

- 空振り週（イベントなし）は「現在発表されているイベントはありません」と明記
- タイムスタンプだけの更新はNG（Googleにバレて逆効果）
- 価格・日程・対象試合は必ず公式で裏取り
- 雨天中止など状況変化も反映
