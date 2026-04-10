"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    twq: (...args: unknown[]) => void;
  }
}

export function trackAppStoreClick() {
  if (typeof window !== "undefined" && window.twq) {
    window.twq("event", "tw-rbug9-rbukj", {});
  }
}

export default function XPixel() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href*="apps.apple.com"]'
      );
      if (target) {
        trackAppStoreClick();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Script id="x-pixel" strategy="afterInteractive">
      {`
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','rbug9');
      `}
    </Script>
  );
}
