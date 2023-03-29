import fsP from "fs/promises"
import path from "path"
import mdxCompiler from "../../../lib/mdxCompile"
import { arrayToParams } from "../../../lib/misc"
import { Metadata } from "next"

const getPath = (fileName: string) =>
  path.join(process.cwd(), "content", "typescript", fileName, "index.mdx")

type TFrontmatter = {
  title: string
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const blogContent = await fsP.readFile(getPath(slug), "utf-8")
  const { frontmatter } = await mdxCompiler<TFrontmatter>(blogContent)
  return { title: frontmatter.title }
}

type Params = { slug: string }

type Props = {
  params: Params
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const blogContent = await fsP.readFile(getPath(slug), "utf-8")
  const { content, frontmatter } = await mdxCompiler<TFrontmatter>(blogContent)

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div>{content}</div>
    </div>
  )
}

export async function generateStaticParams() {
  const fileNames = await fsP.readdir(
    path.join(process.cwd(), "content", "typescript")
  )

  const slugs = arrayToParams(fileNames, "slug")

  return slugs
}
