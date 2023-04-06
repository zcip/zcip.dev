import fsP from "fs/promises"
import fs from "fs"
import { Metadata } from "next"
import { getBlogDirpath, getCachedBlogContent } from "../lib"
import { arrayToParams } from "@/lib/misc"
import { formatJP } from "@/lib/date"
import { generateOGImage } from "@/lib/og-image"
import path from "path"
import { HOST } from "@/lib/constants"

type Params = { slug: string }
type Props = { params: Params }

const getGeneratedOGImagePath = (slug: string) =>
  path.join(process.cwd(), "public/images/generated/blog/", `og-${slug}.png`)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = (await getCachedBlogContent(params.slug)).frontmatter

  const imagePath = getGeneratedOGImagePath(params.slug)

  if (!fs.existsSync(imagePath)) {
    await generateOGImage({ title, ...params })
  }

  return {
    title,
    openGraph: {
      images: {
        url: `${HOST}/public/images/generated/blog/og-${params.slug}.png`,
      },
    },
  }
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
  const blogFileNames = await fsP.readdir(getBlogDirpath())

  return arrayToParams(blogFileNames, "slug")
}
