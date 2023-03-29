import Link from "next/link"
import fs from "fs/promises"
import { getBlogDirpath, getCachedBlogContent } from "./misc"

export const metadata = {
  title: "Blog - zcip",
}

export default async function BlogPage() {
  const blogNames = await fs.readdir(getBlogDirpath())
  const blogs = await Promise.all(
    blogNames.flatMap(async (name) => ({
      ...(await getCachedBlogContent(name)),
      slug: name,
    }))
  )

  return (
    <div className="px-2">
      <main className="flex flex-col justify-center items-center min-h-screen flex-1">
        <ul>
          {blogs?.map((blog) => (
            <li key={blog.frontmatter.title}>
              <Link href={`/blog/${blog.slug}`}>{blog.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
