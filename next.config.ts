import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 72, 75, 78, 80, 85],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "nvmlkahcwyxtvdzdgdjf.supabase.co" },
    ],
  },
};

export default nextConfig;
