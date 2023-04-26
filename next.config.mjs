/** @type {import('next').NextConfig} */
import compose from "next-compose-plugins"
// import remarkGfm from "remark-gfm"
import addMdx from "@next/mdx"
import remarkGemoji from "remark-gemoji"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import analyze from "@next/bundle-analyzer"
import { prettyCodeOptions } from "./lib/rehypePrettyCodeOptions.mjs"
import remarkInjectJsx from "./packages/remark-inject-jsx/dist/index.esm.mjs"

const translateTextToJsx = ({ replaceNodeToJsx, textValue }) => {
  const twitterPattern = /^https?:\/\/twitter\.com\/.*\/status\/(\d+)/
  const tweetIdMatch = textValue.match(twitterPattern)

  if (tweetIdMatch) {
    replaceNodeToJsx({ name: "Tweet", attributes: { id: tweetIdMatch[1] } })
  } else if (/^https?:\/\/\S+$/.test(textValue)) {
    replaceNodeToJsx({ name: "LinkCard", attributes: { href: textValue } })
  }
}

// @see https://nextjs.org/docs/advanced-features/using-mdx
const withMDX = addMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGemoji, [remarkInjectJsx, translateTextToJsx]],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
    parseFrontmatter: true,
  },
})

const withBundleAnalyzer = analyze({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // @see https://nextjs.org/docs/api-reference/next/image#unoptimized
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@zcip/remark-inject-jsx"],
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ["@resvg/resvg-js", "satori"],
    // mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "export",
}

export default compose([withMDX, withBundleAnalyzer], nextConfig)
