import fs from "fs/promises"
import { cache } from "react"
import path from "path"
import { format } from "date-fns"
import mdxCompiler from "../../../lib/mdxCompile"
import { arrayToParams } from "../../../lib/misc"
import { Metadata } from "next"

type TFrontmatter = {
  title: string
  date: string
  tags?: string[]
}

type Params = { slug: string }

type Props = {
  params: Params
}

const getBlogFilePath = (blogDirName: string) =>
  path.join(process.cwd(), "content", "blog", blogDirName, "index.mdx")

// ブログ記事のコンテンツをキャッシュする
const getCachedBlogContent = cache(async (id: string) => {
  const blogContent = await fs.readFile(getBlogFilePath(id), "utf-8")
  const { content, frontmatter } = await mdxCompiler<TFrontmatter>(blogContent)
  return { content, frontmatter }
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = (await getCachedBlogContent(params.slug)).frontmatter
  return {
    title,
  }
}

export default async function Page({ params }: Props) {
  const { frontmatter, content } = await getCachedBlogContent(params.slug)

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{format(new Date(frontmatter.date), "yyyy年M月d日")}</h2>
      <div>{content}</div>
    </div>
  )
}

export async function generateStaticParams() {
  const blogFileNames = await fs.readdir(
    path.join(process.cwd(), "content", "blog")
  )

  return arrayToParams(blogFileNames, "slug")
}
