import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com', 'pbs.twimg.com', 'tailwindui.com', 'images.unsplash.com'],
    formats: ['image/webp'], // Her iki YouTube resim alan adını buraya ekleyin
  },
};

export default nextConfig;