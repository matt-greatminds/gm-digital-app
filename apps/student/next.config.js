/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  transpilePackages: ["gmdp-data-provider"],
  basePath: "/student",
  // webpack(config, { isServer }) {
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: "settingsRemote",
  //       filename: "static/chunks/remoteEntry.js",
  //       exposes: {
  //         // specify exposed pages and components
  //         "./settings": "src/app/page.tsx",
  //       },
  //       shared: {},
  //       // shared: require("./package.json").dependencies,
  //       // specify shared dependencies
  //       // read more in Shared Dependencies section
  //     })
  //   );

  //   return config;
  // },
};

module.exports = nextConfig;
