import type { NextPage } from "next"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>About</div>
    </>
  )
}

export default About
