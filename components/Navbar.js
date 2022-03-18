import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
  return (
    <div><nav className={styles.nav}>
    <ul>
      <Link href='/'><a><li>Home</li></a></Link>
      <Link href='/About'><a><li>About</li></a></Link>
      <Link href='/BlogHome'><a>  <li>Blog</li></a></Link>
      <Link href='/Contact'><a> <li>Contacts</li></a></Link>
    </ul>
  </nav></div>
  )
}

export default Navbar