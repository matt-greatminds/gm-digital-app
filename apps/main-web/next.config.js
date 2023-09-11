const { STUDENT_URL } = process.env;
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/student",
        destination: `${STUDENT_URL}/student`,
      },
      {
        source: "/student/:path*",
        destination: `${STUDENT_URL}/student/:path*`,
      },
    ];
  },
  transpilePackages: ["gmdp-data-provider"],
};
