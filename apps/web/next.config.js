const { DOCS_URL, STUDENT_URL } = process.env;
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // specify remotes
    remote: `remote@${STUDENT_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
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
  // webpack(config, { isServer }) {
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: "host",
  //       filename: "static/chunks/remoteEntry.js",
  //       remotes: remotes(isServer),
  //       exposes: {
  //         // Host app also can expose modules
  //       },
  //     })
  //   );

  //   return config;
  // },
};
