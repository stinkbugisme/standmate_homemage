import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "スタンドメイト - 野球観戦仲間を探そう";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fff5f5 0%, #fff7ed 50%, #ffffff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://standmate.jp/icon.png"
          alt=""
          width={160}
          height={160}
          style={{ borderRadius: 32, marginBottom: 32 }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: "linear-gradient(135deg, #ef4444, #f97316)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          スタンドメイト
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#374151",
            marginBottom: 8,
          }}
        >
          野球ファン向け仲間探しアプリ
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6b7280",
          }}
        >
          友達検索 & 観戦仲間探し
        </div>
      </div>
    ),
    { ...size }
  );
}
