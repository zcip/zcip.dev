"use client"

import Link from "next/link"
import Header from "../components/Header"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Hello</h1>
          <Link href="/about">About me</Link>
          <Link href="/til">TODAY I Lerned</Link>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  )
}
