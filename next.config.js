/** @type {import('next').NextConfig} */

// @see https://nextjs.org/docs/advanced-features/using-mdx
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
  // @see https://nextjs.org/docs/api-reference/next/image#unoptimized
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
