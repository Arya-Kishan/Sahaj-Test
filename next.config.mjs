/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });
    config.resolve.alias.canvas = false;
    return config;
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  eslist:{
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
