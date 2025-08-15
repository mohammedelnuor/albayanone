import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
