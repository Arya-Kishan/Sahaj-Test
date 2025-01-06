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
    //for tetsing adding (img.freepik.com)(www.business-standard.com) should be removed later
    domains: ['sahajmoney-bucket.s3.ap-south-1.amazonaws.com','sahajmoney.com','img.freepik.com',"www.business-standard.com"]
},

  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
};

export default nextConfig;
