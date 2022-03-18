import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className={styles.container}>
      <style jsx>
        {`
        h2{
          font-size:38px
        }
        h3{
          font-size:28px
        }
        `}</style>
    
      <Head>
        <title>Create Tayyab App</title>
        <meta name="description" content="Generated tayyab by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      
  {/* <Script src='/kesa.js' strategy='lazyOnload'></Script> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>
          Hunters Code </span>
        </h1>
        <div className={styles.dataImg}>
        <Image  className="myImg" src="/dow.jpeg" width="160" height="130"></Image></div>

        <p className={styles.description}>
        A Blog For Develepers to Search their Problems
        </p>
        
        <div className="blogs"><h2>Latest Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3><div className="ss"></div>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3><div className="ss"></div>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
           <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3><div className="ss"></div>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>

       
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
