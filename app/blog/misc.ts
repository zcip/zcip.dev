import fs from "fs/promises"
import path from "path"
import { cache } from "react"
import mdxCompiler from "../../lib/mdxCompile"

type TFrontmatter = {
  title: string
  date: string
  tags?: string[]
}

export const getBlogDirpath = () => path.join(process.cwd(), "content", "blog")

export const getBlogFilePath = (blogDirName: string) =>
  path.join(getBlogDirpath(), blogDirName, "index.mdx")

// ブログ記事のコンテンツをキャッシュする
export const getCachedBlogContent = cache(async (id: string) => {
  const blogContent = await fs.readFile(getBlogFilePath(id), "utf-8")
  const { content, frontmatter } = await mdxCompiler<TFrontmatter>(blogContent)
  return { content, frontmatter }
})
