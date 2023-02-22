import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zcip&apos; github.io</title>
        <meta name="description" content="zcip website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

export default Home
