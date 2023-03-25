import Link from "next/link"
import fs from "fs/promises"
import path from "path"

type Props = {
  params: { titles: string[] }
}

export default async function BlogPage({ params }: Props) {
  const { titles } = params
  return (
    <div className="px-2">
      <main className="flex flex-col justify-center items-center min-h-screen flex-1">
        Blog Content
        <ul>
          {titles.map((title) => (
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

// generateStaticParamsはビルド時に生成可能。便利。
export async function generateStaticParams() {
  const titles = await fs.readdir(path.join(process.cwd(), "content", "blog"))
  return { titles }
}
