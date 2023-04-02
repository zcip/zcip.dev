import Link from "next/link"
import { fetchBlogs } from "./blog/lib"
import { formatJP } from "@/lib/date"

export default async function HomePage() {
  const blogs = await fetchBlogs()
  return (
    <main className="flex flex-col text-gray-300 px-2">
      <div className="pb-20">
        <Link
          href="/blog"
          className="text-2xl mb-10 hover:border-b-2 border-pink-700"
        >
          <h4 className="text-white">最近のブログ記事</h4>
        </Link>
        <ul className="mb-6">
          {blogs.slice(0, 3).map((blog) => (
            <li key={blog.slug} className="p-6 block text-gray-300">
              <h4 className="mb-4 text-gray-500">
                {formatJP(blog.frontmatter.date)}
              </h4>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-xl hover:border-b-2 hover:text-white border-pink-700 text-gray-200"
              >
                {blog.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-xl mb-10 text-center">
          <h4 className="text-gray-300 hover:text-white">すべての記事を見る</h4>
        </Link>
      </div>
    </main>
  )
}
