const { withUI } = require("@project/ui/next-plugin");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@project/ui"],
};

module.exports = withUI(config);
