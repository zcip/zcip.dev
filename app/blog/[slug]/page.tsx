import fs from "fs/promises"
import path from "path"
import { format } from "date-fns"
import mdxCompiler from "../../../lib/mdxCompile"
import { arrayToParams } from "../../../lib/misc"

const getBlogPath = (fileName: string) =>
  path.join(process.cwd(), "content", "blog", fileName, "index.mdx")

type Props = {
  params: { slug: string }
}

type TFrontmatter = {
  title: string
  date: string
  tags?: string[]
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const blogContent = await fs.readFile(getBlogPath(slug), "utf-8")
  const { content, frontmatter } = await mdxCompiler<TFrontmatter>(blogContent)

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
