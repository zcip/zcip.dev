import fs from "fs/promises"
import { format } from "date-fns"
import { arrayToParams } from "../../../lib/misc"
import { Metadata } from "next"
import { getBlogDirpath, getCachedBlogContent } from "../misc"

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
      <h2>{format(new Date(frontmatter.date), "yyyy年M月d日")}</h2>
      <div>{content}</div>
    </div>
  )
}

export async function generateStaticParams() {
  const blogFileNames = await fs.readdir(getBlogDirpath())

  return arrayToParams(blogFileNames, "slug")
}
