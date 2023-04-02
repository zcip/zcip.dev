/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm"
import addMdx from "@next/mdx"
import rehypePrettyCode from "rehype-pretty-code"
import { prettyCodeOptions } from "./lib/rehypePrettyCodeOptions.mjs"

// @see https://nextjs.org/docs/advanced-features/using-mdx
const withMDX = addMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
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
  output: "export",
})

export default nextConfig
