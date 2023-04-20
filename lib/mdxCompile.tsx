import { compileMDX } from "next-mdx-remote/rsc"
import { prettyCodeOptions } from "./rehypePrettyCodeOptions.mjs"
// import remarkGfm from "remark-gfm"
import remarkGemoji from "remark-gemoji"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import { components } from "../components/MdxComponents"
import remarkInjectJsx from "../packages/remark-inject-jsx/dist/index.esm.js"

// TODO:  型
const translateTextToJsx = ({ replaceNodeToJsx, textValue }: any) => {
  const twitterPattern = /^https?:\/\/twitter\.com\/.*\/status\/(\d+)/
  const tweetIdMatch = textValue.match(twitterPattern)

  if (tweetIdMatch) {
    replaceNodeToJsx({ name: "Tweet", attributes: { id: tweetIdMatch[1] } })
  } else if (/^https?:\/\/\S+$/.test(textValue)) {
    replaceNodeToJsx({ name: "LinkCard", attributes: { href: textValue } })
  }
}

export default async function mdxCompiler<TFrontmatter>(source: string) {
  const result = await compileMDX<TFrontmatter>({
    source,
    components,
    options: {
      mdxOptions: {
        // TODO: remarkGfmのオートリンクと競合したので一旦 remarkGfm の利用を停止
        // remarkPlugins: [remarkGfm, remarkGemoji],
        remarkPlugins: [remarkGemoji, [remarkInjectJsx, translateTextToJsx]],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
      },
      parseFrontmatter: true,
    },
  })

  return result
}
