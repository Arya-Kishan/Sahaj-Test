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
  images: {
    // For testing, adding (img.freepik.com) and (www.business-standard.com) domains. Remove later.
    domains: [
      'sahajmoney-bucket.s3.ap-south-1.amazonaws.com',
      'sahajmoney.com',
      'img.freepik.com',
      'www.business-standard.com',
    ],
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://insecure-api.com/:path*',
      },
    ];
  },
};

export default nextConfig;
