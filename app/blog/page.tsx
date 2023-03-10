// "use client"

import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="px-2">
      <main className="flex flex-col justify-center items-center min-h-screen flex-1">
        Blog Content
        <ul>
          <li>
            <Link href="/blog/create-a-new-portfolio-in-2023">
              新しいポートフォリオを作る 2023
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
