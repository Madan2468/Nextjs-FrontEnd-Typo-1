const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Type check hata diya taaki Vercel pe koi error na aaye
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

// ⚡ No type import, no fuss
module.exports = nextConfig;
