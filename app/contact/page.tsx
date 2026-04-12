"use client";

import { useState, type FormEvent } from "react";

const CONTACT_CATEGORIES = [
  "アプリに関するご質問",
  "不具合の報告",
  "ご要望・機能リクエスト",
  "プレミアム会員について",
  "その他",
] as const;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="min-h-screen bg-white">
        <div className="subpage-container">
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="!mb-4">送信完了</h1>
            <p className="text-lg">
              お問い合わせありがとうございます。<br />
              通常、24時間以内にご返信いたします。
            </p>
            <p className="text-sm !text-gray-400">
              ※ 週末・祝日を挟む場合は、お時間をいただく場合がございます。
            </p>
            <a href="/" className="cta-button cta-primary mt-6 no-underline">
              トップページに戻る
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="subpage-container">
        <h1>お問い合わせ</h1>

        <p>
          アプリに関するご質問、不具合の報告、ご要望などがございましたら、以下のフォームよりお気軽にお問い合わせください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""} />
          <input type="hidden" name="subject" value="【スタンドメイト】お問い合わせ" />
          <input type="hidden" name="from_name" value="スタンドメイト お問い合わせフォーム" />
          <input type="checkbox" name="botcheck" className="hidden" />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="山田 太郎"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-gray-700"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
              お問い合わせ種別 <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue=""
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-gray-700 bg-white"
            >
              <option value="" disabled>選択してください</option>
              {CONTACT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all text-gray-700 resize-vertical"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="cta-button cta-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  送信中...
                </>
              ) : (
                "送信する"
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              送信に失敗しました。お手数ですが、もう一度お試しください。
            </p>
          )}

          <p className="text-sm !text-gray-400 text-center">
            ※ 通常、24時間以内にご返信いたします。週末・祝日を挟む場合は、お時間をいただく場合がございます。
          </p>
        </form>
      </div>
    </div>
  );
}
