import { compileMDX } from "next-mdx-remote/rsc"
import { prettyCodeOptions } from "./rehypePrettyCodeOptions.mjs"
import remarkGfm from "remark-gfm"
import remarkGemoji from "remark-gemoji"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import { components } from "../components/MdxComponents"

export default async function mdxCompiler<TFrontmatter>(source: string) {
  const result = await compileMDX<TFrontmatter>({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkGemoji],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
      },
      parseFrontmatter: true,
    },
  })

  return result
}
