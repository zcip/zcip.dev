import fs from "fs/promises"
import path from "path"
import mdxCompiler from "../../../lib/mdxCompile"

const getBlogPath = (fileName: string) =>
  path.join(process.cwd(), "content", "blog", fileName, "content.mdx")

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const blogContent = await fs.readFile(getBlogPath(slug), "utf-8")
  // TODO:  mdxでコンパイル
  const { content } = await mdxCompiler(blogContent)
  console.log(JSON.stringify(content, null, 2))

  return <div>{content}</div>
}

export const generateStaticParams = async () => {
  const blogFileNames = await fs.readdir(
    path.join(process.cwd(), "content", "blog")
  )

  const slugs = blogFileNames.map((slug) => {
    slug
  })

  return slugs
}
