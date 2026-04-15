import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/blog/yakyu-kansen-tomodachi-tsukurikata",
        destination: "/blog/yakyu-kansen-nakama-mitsuke-kata",
        permanent: true,
      },
      {
        source: "/blog/yakyu-tomodachi-dekinai-kaiketsu",
        destination: "/blog/yakyu-kansen-nakama-mitsuke-kata",
        permanent: true,
      },
      {
        source: "/blog/yakyu-kansen-issho-ni-iku-hito",
        destination: "/blog/yakyu-kansen-nakama-mitsuke-kata",
        permanent: true,
      },
      {
        source: "/blog/yakyu-matching-app-hikaku",
        destination: "/blog/yakyu-matching-app-osusume-ranking-2026",
        permanent: true,
      },
      {
        source: "/blog/yakyu-matching-app-kuchikomi",
        destination: "/blog/yakyu-matching-app-osusume-ranking-2026",
        permanent: true,
      },
      {
        source: "/blog/matching-app-yakyu-zuki-mitsuke-kata",
        destination: "/blog/yakyu-matching-app-osusume-ranking-2026",
        permanent: true,
      },
      {
        source: "/blog/yakyu-kansen-boshu-houhou",
        destination: "/blog/yakyu-kansen-doukousha-boshu-guide",
        permanent: true,
      },
      {
        source: "/blog/yakyu-kansen-toujitsu-kyubo",
        destination: "/blog/yakyu-kansen-doukousha-boshu-guide",
        permanent: true,
      },
      {
        source: "/blog/ouen-board-tsukurikata-app",
        destination: "/blog/yakyu-ouen-board-app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
