/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  webpack: (config) => {
    config.resolve.alias["@/components/multi"] = path.resolve(
      __dirname,
      "./src/components/multi"
    );
    return config;
  },
};