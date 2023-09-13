/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // specify remotes
    games: `games@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  transpilePackages: ["gmdp-data-provider"],
  basePath: "/student",
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "student",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        shared: {
          ...require("../../package.json").dependencies,
        },
        exposes: {
          // Host app also can expose modules
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
