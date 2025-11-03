import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Ignore type errors during build on Vercel
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
