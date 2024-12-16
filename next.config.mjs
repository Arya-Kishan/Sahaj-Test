/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });
    return config;
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
};

export default nextConfig;
