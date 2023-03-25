import Link from "next/link"

function Sideber() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/typescript/process-env">process.envの型</Link>
        </li>
      </ul>
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <Sideber />
      {/* TODO: サイドバー */}
    </div>
  )
}
