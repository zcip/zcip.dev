import Link from "next/link"
import { formatJP } from "@/lib/date"
import postData from "./posts.json"
import Qiita from "./qiita"

function Posts() {
  return (
    <ul className="mb-6">
      {postData.posts.map((blog) => (
        <li key={blog.id} className="p-6 block text-gray-300">
          <h4 className="mb-4 text-gray-500">{formatJP(blog.date)}</h4>
          <Link
            href={`/${new Date(blog.date).getFullYear()}/${blog.id}`}
            className="text-xl hover:border-b-2 hover:text-white  text-gray-200"
          >
            {blog.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default async function HomePage() {
  return (
    <main className="flex flex-col text-gray-300 px-2">
      <section className="pb-20">
        <Posts />
      </section>
      <section>
        <h3>他媒体のブログ記事</h3>
        <Qiita />
      </section>
    </main>
  )
}
