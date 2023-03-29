import { compileMDX } from "next-mdx-remote/rsc"
import { prettyCodeOptions } from "./rehypePrettyCodeOptions.mjs"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import { components } from "../components/MdxComponents"

export default async function mdxCompiler<TFrontmatter>(source: string) {
  const result = await compileMDX<TFrontmatter>({
    source,
    components,
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
