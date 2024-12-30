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
    //for tetsing adding (img.freepik.com) should be removed later
    domains: ['sahajmoney-bucket.s3.ap-south-1.amazonaws.com','sahajmoney.com','img.freepik.com']
},

  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
};

export default nextConfig;
