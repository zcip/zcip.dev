import fs from "fs/promises"
import { Metadata } from "next"
import { getBlogDirpath, getCachedBlogContent } from "../lib"
import { arrayToParams } from "@/lib/misc"
import { formatJP } from "@/lib/date"

type Params = { slug: string }
type Props = { params: Params }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = (await getCachedBlogContent(params.slug)).frontmatter
  return { title }
}

export default async function Page({ params }: Props) {
  const { frontmatter, content } = await getCachedBlogContent(params.slug)

  return (
    <div className="prose lg:prose-xl prose-invert max-w-full">
      <h1>{frontmatter.title}</h1>
      <h2>{formatJP(frontmatter.date)}</h2>
      <div>{content}</div>
    </div>
  )
}

export async function generateStaticParams() {
  const blogFileNames = await fs.readdir(getBlogDirpath())

  return arrayToParams(blogFileNames, "slug")
}
