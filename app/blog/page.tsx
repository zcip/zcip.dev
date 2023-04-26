import Link from "next/link"
import { fetchBlogsWithCache } from "./lib"
import { format } from "date-fns"

export const metadata = {
  title: "Blog - zcip",
}

export default async function BlogPage() {
  const blogs = await fetchBlogsWithCache()

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
