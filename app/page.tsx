// "use client"

import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="px-2">
        <main className="flex flex-col justify-center items-center min-h-screen flex-1">
          <Link href="/about">About me</Link>
          <Link href="/til">TODAY I Lerned</Link>
        </main>
      </div>
    </>
  )
}
