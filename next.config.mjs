/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm"
import addMdx from "@next/mdx"
import rehypePrettyCode from "rehype-pretty-code"

// @see https://nextjs.org/docs/advanced-features/using-mdx
const withMDX = addMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  // @see https://nextjs.org/docs/api-reference/next/image#unoptimized
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
    // mdxRs: true,
    typedRoutes: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
})

export default nextConfig
