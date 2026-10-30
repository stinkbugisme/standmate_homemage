import { ImageResponse } from "next/og";
import { BRAND, OG_SIZE, loadFonts, loadIcon } from "./components/og";

export const alt = "スタンドメイト - 野球観戦の友達・仲間が見つかるアプリ";
export const size = OG_SIZE;
export const contentType = "image/png";

const HEADLINE = "野球観戦仲間を探そう";
const LEAD = "同じ球団のファン同士で、観戦仲間・野球友達が見つかる";
const CHIPS = ["観戦募集", "アプリ内通話", "通話で観戦", "写真・動画"];
const FOOT = "iPhone / Android ・ 基本無料";

export default async function OgImage() {
  const [icon, fonts] = await Promise.all([
    loadIcon(),
    loadFonts(["スタンドメイト", HEADLINE, LEAD, ...CHIPS, FOOT, "standmate.jp"].join("")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: `linear-gradient(135deg, ${BRAND.pale} 0%, #f5fbff 55%, #ffffff 100%)`,
          fontFamily: "Noto Sans JP",
          color: BRAND.navy,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" width={96} height={96} style={{ borderRadius: 24 }} />
          <div style={{ fontSize: 52, fontWeight: 900, color: BRAND.sky }}>スタンドメイト</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.2 }}>{HEADLINE}</div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#334155" }}>{LEAD}</div>
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            {CHIPS.map((c) => (
              <div
                key={c}
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#ffffff",
                  background: BRAND.sky,
                  borderRadius: 999,
                  padding: "8px 26px",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 700, color: "#64748b" }}>
          <div>{FOOT}</div>
          <div>standmate.jp</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
