import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "スタンドメイトへのお問い合わせはこちらのフォームからお気軽にご連絡ください。ご質問、不具合の報告、ご要望を受け付けています。",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
