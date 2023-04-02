import Link from "next/link"
import fs from "fs/promises"
import { getBlogDirpath, getCachedBlogContent } from "./misc"
import { format } from "date-fns"

async function fetchBlogs() {
  const blogNames = await fs.readdir(getBlogDirpath())
  const blogs = (
    await Promise.all(
      blogNames.flatMap(async (name) => ({
        ...(await getCachedBlogContent(name)),
        slug: name,
      }))
    )
  ).sort((a, b) => Number(b.frontmatter.date) - Number(a.frontmatter.date))
  return blogs
}

export const metadata = {
  title: "Blog - zcip",
}

export default async function BlogPage() {
  const blogs = await fetchBlogs()

  return (
    <main className="">
      <ul className="flex flex-col gap-2">
        {blogs?.map((blog) => (
          <li key={blog.frontmatter.title} className="block p-6 rounded-lg">
            <h4 className="text-gray-500 mb-4">
              {format(new Date(blog.frontmatter.date), "yyyy年M月d日")}
            </h4>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-2xl text-gray-100 hover:border-b-2 border-pink-600"
            >
              {blog.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
