import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>zcip&apos; github.io</title>
        <meta name="description" content="zcip website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello</h1>
        <Link href="/about">
          <a>About me</a>
        </Link>

        <Link href="/til">
          <a>TODAY I Lerned</a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
