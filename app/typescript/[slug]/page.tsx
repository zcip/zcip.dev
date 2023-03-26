import fs from "fs/promises"
import path from "path"
import mdxCompiler from "../../../lib/mdxCompile"

const getPath = (fileName: string) =>
  path.join(process.cwd(), "content", "typescript", fileName, "index.mdx")

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const blogContent = await fs.readFile(getPath(slug), "utf-8")
  const { content, frontmatter } = await mdxCompiler(blogContent)

  return <div>{content}</div>
}

export async function generateStaticParams() {
  const fileNames = await fs.readdir(
    path.join(process.cwd(), "content", "typescript")
  )

  const slugs = fileNames.map((slug) => {
    slug
  })

  return slugs
}
