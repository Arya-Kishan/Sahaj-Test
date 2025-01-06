module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://15.207.70.211:4001/api/:path*',
        },
      ];
    },
  };
  