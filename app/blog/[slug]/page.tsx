import fsP from "fs/promises"
import fs from "fs"
import { Metadata } from "next"
import { getBlogDirpath, getCachedBlogContent } from "../lib"
import { arrayToParams } from "@/lib/misc"
import { formatJP } from "@/lib/date"
import { generateOGImage } from "@/lib/og-image"
import path from "path"
import { HOST, IS_PRODUCTION } from "@/lib/constants"

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

  const description = `${title}について`
  const imageUrl = IS_PRODUCTION
    ? `${HOST}/images/generated/blog/og-${params.slug}.png`
    : `${HOST}/public/images/generated/blog/og-${params.slug}.png`

  return {
    title,
    metadataBase: new URL(HOST),
    openGraph: {
      title,
      url: `${HOST}/blog/${params.slug}`,
      siteName: "zcip.web",
      // TODO: descriptionを設定する
      description,
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
      },
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl,
    },
  }
}

export default async function Page({ params }: Props) {
  const { frontmatter, content } = await getCachedBlogContent(params.slug)

  return (
    <div className="prose lg:prose-xl prose-invert max-w-full">
      <div className="mb-20">
        <h1>{frontmatter.title}</h1>
        <span>{formatJP(frontmatter.date)}</span>
      </div>
      <div>{content}</div>
    </div>
  )
}

export async function generateStaticParams() {
  const blogFileNames = await fsP.readdir(getBlogDirpath())

  return arrayToParams(blogFileNames, "slug")
}
