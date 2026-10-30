import { Fragment } from "react";
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

// budoux は「202|6年」「カ|レンダー」のように数字・英単語・カタカナ語の途中でも区切るので、
// 英数字どうし・カタカナどうしの区切りはつなぎ直す
const ALNUM = "0-9A-Za-z";
const KANA = "ァ-ヶー";
const GLUE = [
  [new RegExp(`[${ALNUM}.,]$`), new RegExp(`^[${ALNUM}]`)],
  [new RegExp(`[${KANA}]$`), new RegExp(`^[${KANA}]`)],
] as const;
const glued = (a: string, b: string) => GLUE.some(([end, start]) => end.test(a) && start.test(b));

export function splitPhrases(text: string) {
  const out: string[] = [];
  for (const p of parser.parse(text)) {
    if (out.length && glued(out[out.length - 1], p)) out[out.length - 1] += p;
    else out.push(p);
  }
  return out;
}

// 日本語の文を文節で区切り、文節の途中では改行しないようにする。
// Safari は CSS の word-break: auto-phrase に未対応なので、サーバー側で <wbr> を入れて keep-all で包む。
// サーバーコンポーネント専用(クライアントで使うと辞書がバンドルに入る)
export default function Phrase({ children }: { children: string }) {
  const parts = splitPhrases(children);
  return (
    <span className="phrase">
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {p}
        </Fragment>
      ))}
    </span>
  );
}

// HTML 文字列版(記事本文の見出しなど dangerouslySetInnerHTML で出すもの)
// budoux は区切りにゼロ幅スペースを入れるので、本文テキストに残らないよう <wbr> に置き換える
const ZWSP = String.fromCharCode(0x200b);
const GAP = new RegExp(`([${ALNUM}.,])${ZWSP}(?=[${ALNUM}])|([${KANA}])${ZWSP}(?=[${KANA}])`, "g");
export const phraseHtml = (html: string) =>
  parser.translateHTMLString(html).replace(GAP, "$1$2").replaceAll(ZWSP, "<wbr>");
