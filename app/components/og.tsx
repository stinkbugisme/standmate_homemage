import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import { splitPhrases } from "./Phrase";
import path from "node:path";

// OGP 画像(opengraph-image.tsx)で共通に使う部品。ビルド時に静的生成される

export const OG_SIZE = { width: 1200, height: 630 };

export const BRAND = {
  sky: "#0e86d9",
  navy: "#0b2a5b",
  pale: "#e6f4fd",
};

// アプリのアイコンを data URL で読み込む(本番 URL に依存しない)
export async function loadIcon() {
  const buf = await readFile(path.join(process.cwd(), "public", "icon.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

// 画像に描く文字だけを含む Noto Sans JP を Google Fonts から取得する。
// User-Agent を付けないと TrueType が返るので、ImageResponse(satori)でそのまま使える
export async function loadFonts(text: string) {
  const weights = [700, 900] as const;
  const fonts = await Promise.all(
    weights.map(async (weight) => {
      try {
        const css = await fetch(
          `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&text=${encodeURIComponent(text)}`
        ).then((r) => r.text());
        const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
        if (!url) return null;
        const data = await fetch(url).then((r) => r.arrayBuffer());
        return { name: "Noto Sans JP", data, weight, style: "normal" as const };
      } catch {
        return null;
      }
    })
  );
  return fonts.filter((f) => f !== null);
}

const FOOT = "野球観戦の友達・仲間が見つかるアプリ";

// 見出しの長さで文字の大きさを変え、2〜3行に収める。
// いちばん長い文節が1行(幅 1056px)に入らないと文節の途中で折れるので、そのときはさらに小さくする
const TEXT_WIDTH = 1000; // 本来の幅 1056px から少し余裕をとる
const em = (t: string) => [...t].reduce((n, c) => n + (/[ -~]/.test(c) ? 0.65 : 1), 0);
function titleSize(text: string) {
  const base = text.length <= 16 ? 72 : text.length <= 28 ? 62 : text.length <= 40 ? 54 : 46;
  const longest = Math.max(...splitPhrases(text).map(em));
  return Math.min(base, Math.floor(TEXT_WIDTH / longest));
}

// 文節の途中で改行しないよう、文節ごとに縮まない箱を作って折り返す
function Wrapped({ text, style }: { text: string; style: Record<string, string | number> }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", ...style }}>
      {splitPhrases(text).map((p, i) => (
        <span key={i} style={{ flexShrink: 0 }}>
          {p}
        </span>
      ))}
    </div>
  );
}

// 記事・カテゴリー用の画像(上にカテゴリー名、中央にタイトル、下にロゴ)
export async function articleOgImage({ category, title }: { category: string; title: string }) {
  const [icon, fonts] = await Promise.all([
    loadIcon(),
    loadFonts(["スタンドメイト", title, category, FOOT, "standmate.jp"].join("")),
  ]);

  // 「本題｜補足」の形のタイトルは、本題を大きく、補足を副題として小さく出す
  const [main, ...rest] = title.split("｜");
  const sub = rest.join("｜");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: `linear-gradient(135deg, ${BRAND.pale} 0%, #f5fbff 55%, #ffffff 100%)`,
          fontFamily: "Noto Sans JP",
          color: BRAND.navy,
          borderTop: `16px solid ${BRAND.sky}`,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: BRAND.sky,
              background: "#ffffff",
              border: `3px solid ${BRAND.sky}`,
              borderRadius: 999,
              padding: "6px 24px",
            }}
          >
            {category}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Wrapped text={main} style={{ fontSize: titleSize(main), fontWeight: 900, lineHeight: 1.3 }} />
          {sub && <Wrapped text={sub} style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.4, color: "#334155" }} />}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt="" width={72} height={72} style={{ borderRadius: 18 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 900, color: BRAND.sky }}>スタンドメイト</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#64748b" }}>{FOOT}</div>
            </div>
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#64748b" }}>standmate.jp</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
