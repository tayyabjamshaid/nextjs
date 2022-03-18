import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/Blog.module.css"
export default function Slug() {
  const router=useRouter();
  const {slug}=router.query;
 
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the Page {slug}</h1>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda labore distinctio quasi ea amet cum excepturi voluptatum mollitia molestias hic inventore iure eligendi in qui nemo non atque, odio consequatur! Unde debitis asperiores voluptatum modi harum obcaecati voluptates est? Vitae enim quia perspiciatis nostrum? Non nostrum quibusdam excepturi quia!</p>
     </main> </div>
  )
}


