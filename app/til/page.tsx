"use client"

import Link from "next/link"

export default function TilPage() {
  return (
    <>
      <div className="flex">
        <h2>TODAY I LERANED</h2>
        <p>今日学んだことをまとめていく</p>
        <Link href="/til/codesandbox">Codesandbox</Link>
      </div>
    </>
  )
}
