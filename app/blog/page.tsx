import Link from "next/link"
import fs from "fs/promises"
import path from "path"

export default async function BlogPage() {
  const blogTitles = await fs.readdir(
    path.join(process.cwd(), "content", "blog")
  )
  return (
    <div className="px-2">
      <main className="flex flex-col justify-center items-center min-h-screen flex-1">
        Blog Content
        <ul>
          {blogTitles.map((title) => (
            <li key={title}>
              <Link href={`/blog/${title}`}>
                新しいポートフォリオを作る 2023
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
