import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Header from "./components/Header";
import XPixel from "./components/XPixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://standmate.jp";
const siteName = "スタンドメイト";
const defaultTitle =
  "野球観戦の友達・仲間が見つかるアプリ｜スタンドメイト";
const defaultDescription =
  "プロ野球12球団・高校野球・大学野球・社会人野球のファンが集まる友達検索＆観戦仲間探しアプリ『スタンドメイト』。同じ球団を応援する仲間を見つけて、一緒に球場へ。基本無料、有料プランも月額1,000円。";

export const metadata: Metadata = {
  verification: {
    google: "U9h-E_RXLVeOTGkxk5Rps_O4cKBRezg00JsCir2s6h4",
  },
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | スタンドメイト",
  },
  description: defaultDescription,
  keywords: [
    "野球 仲間探しアプリ",
    "野球ファン 友達",
    "野球観戦 仲間",
    "観戦仲間 募集",
    "野球 友達作り",
    "プロ野球 観戦",
    "スタンドメイト",
    "野球 仲間探し",
    "野球観戦 一人",
    "高校野球 ファン",
    "大学野球 観戦",
    "社会人野球",
    "友達検索 アプリ",
    "観戦募集 アプリ",
    "球場 友達",
    "甲子園 観戦仲間",
    "東京ドーム 観戦仲間",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/icon-192.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "スタンドメイト - 野球ファンの友達・観戦仲間探しアプリ",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/icon.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
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
        <GoogleAnalytics />
        <XPixel />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
