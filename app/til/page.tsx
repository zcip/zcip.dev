"use client"

import Link from "next/link"
import Header from "../../components/Header"

export default function TilPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <Link href="/til/codesandbox">Codesandbox</Link>
      </div>
    </>
  )
}
