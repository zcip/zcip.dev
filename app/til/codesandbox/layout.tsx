"use client"

import Link from "next/link"
import { json as data } from "./codeSandboxes"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row w-full p-5">
        <ul className="w-60">
          {data.map((x) => (
            <li key={x.title} className="w-full list-none h-auto break-words">
              <Link href={`/til/codesandbox/${encodeURIComponent(x.id)}`}>
                {x.title}
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  )
}
