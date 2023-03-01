"use client"

import { NextPage } from "next"
import Link from "next/link"
import Header from "../../components/Header"

const TilPage: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <h1 className="text-3xl font-bold underline text-center">
          Hello World
        </h1>
        <Link href="/til/first-css">はじめてのcss</Link>
        {children}
      </div>
      {/* <Link href="/til/first-mdx">はじめてのmdx</Link> */}
    </>
  )
}

export default TilPage
