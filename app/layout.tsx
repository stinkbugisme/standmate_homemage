import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://standmate.jp";
const siteName = "スタンドメイト";
const defaultDescription =
  "野球ファン同士が繋がる、友達検索＆観戦マッチングアプリ。同じ球団を応援する仲間を見つけて、一緒に球場に行こう！";

export const metadata: Metadata = {
  verification: {
    google: "U9h-E_RXLVeOTGkxk5Rps_O4cKBRezg00JsCir2s6h4",
  },
  metadataBase: new URL(siteUrl),
  title: {
    default: "スタンドメイト - 野球ファン向けマッチングアプリ",
    template: "%s | スタンドメイト",
  },
  description: defaultDescription,
  keywords: [
    "野球",
    "マッチングアプリ",
    "野球ファン",
    "観戦仲間",
    "野球観戦",
    "スタンドメイト",
    "プロ野球",
    "高校野球",
    "友達検索",
    "観戦募集",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: "スタンドメイト - 野球ファン向けマッチングアプリ",
    description: defaultDescription,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "スタンドメイト",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "スタンドメイト - 野球ファン向けマッチングアプリ",
    description: defaultDescription,
    images: ["/icon.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  other: {
    "apple-itunes-app": "app-id=6753888706",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
