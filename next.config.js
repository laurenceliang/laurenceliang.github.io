const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  latex: true
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	// any configs you need
  images: {
    unoptimized: true,
  },
};

module.exports = withNextra(nextConfig);
