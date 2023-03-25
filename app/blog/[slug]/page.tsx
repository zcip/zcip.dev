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
  const { content, frontmatter } = await mdxCompiler(blogContent)

  return <div>{content}</div>
}

export async function generateStaticParams() {
  const blogFileNames = await fs.readdir(
    path.join(process.cwd(), "content", "blog")
  )

  const slugs = blogFileNames.map((slug) => {
    slug
  })

  return slugs
}
