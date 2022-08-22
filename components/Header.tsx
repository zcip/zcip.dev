import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="w-max">
      <div>
        <Link href={"/"}>TOP</Link>
      </div>
    </header>
  )
}
