import { compileMDX } from "next-mdx-remote/rsc"
import { prettyCodeOptions } from "./rehypePrettyCodeOptions.mjs"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

export default async function mdxCompiler(source: string) {
  const result = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
      parseFrontmatter: true,
    },
  })
  return result
}
