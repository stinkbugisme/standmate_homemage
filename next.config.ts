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
    ];
  },
};

export default nextConfig;
