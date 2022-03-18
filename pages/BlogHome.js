import React from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'

export default function BlogHome() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <div >
      <Link href={'/Blogs/learn-js'}>
      <h3 className={styles.blogItem}>How to learn JavaScript in 2022?</h3></Link><div className="ss"></div>
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
    <div className="blogItem">
      <h3>How to learn JavaScript in 2022?</h3><div className="ss"></div>
      <p>JavaScript is the language used to design logic for the web</p>
    </div>
     <div className="blogItem">
      <h3>How to learn JavaScript in 2022?</h3><div className="ss"></div>
      <p>JavaScript is the language used to design logic for the web</p>
    </div></main>
  </div>
  )
}
