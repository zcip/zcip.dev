import Link from "next/link"

export const metadata = {
  title: "TypeScript - zcip",
}

function Sideber() {
  return (
    <div className="w-60 px-4 pt-4">
      <h3 className="font-medium">
        <Link href="/typescript">TypeScript</Link>
      </h3>
      <ul className="pl-1">
        <li>
          <Link href="/typescript/process-env">process.envの型</Link>
        </li>
        <li>
          <Link href="/typescript/date-fns">日付ライブラリ</Link>
        </li>
      </ul>
    </div>
  )
}

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex">
      <Sideber />
      <div className="container mx-auto pt-4">
        <div className="prose lg:prose-xl">{children}</div>
      </div>
    </div>
  )
}
