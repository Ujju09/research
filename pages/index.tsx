import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nae raste | research</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <meta name="google-site-verification" content="SlF8pulxb_3mPZEUyISxKfwbgxW33EPV7eGacqL8sa4" />
      </Head>

      <main className={styles.mainDiksha}>
        <h1 className={styles.title}>
      <Image src="/nrsvg.svg" alt="notebook" width={50} height={50} />
         nae raste │
         research
        </h1>
        <Image src="/banner.png" alt="banner" width={811} height={336}/>
        <div style={{
          lineHeight: '2.0',
          padding: '2rem',
          fontSize: '1.2rem',
          fontWeight: '300',
          textAlign: 'left',
          marginBottom: '1rem',
          
        }}>
          
          The best learning happens when you teach. We are a team of researchers and educators who want to help you learn.
           With nae raste, we are launching a <u style={{
           
            color: 'purple',
            fontWeight: '600',
          }}>peer-to-peer offline tutoring program</u>.
          If you are in class 8 or above, you can participate in this research.<br/>
          <div style={{
            width:"100%",
            height:"2px",
            backgroundColor: "grey",
          }}>

          </div>
          📖 Things to keep in mind:
          <ul >
            <li>
              You can participate as a teacher or a student.
            </li>
            <li>
            You will be learning or teaching for 2-3 hrs per week for one month.
            </li>
            <li>
            You can choose a chapter you want to teach or learn. We can also help with assigning chapters to you.
            </li>
            <li>
            You will take a test on that chapter at the beginning and the end of this period. It will help us monitor progress.
            </li>
            <li>
            Teaching will happen offline. So, the teacher can choose a place of their convenience to teach.
            </li>
            <li>
            It will be a good idea to inform your parents about this project and that you are participating.
            </li>
          </ul>
        </div>
        If you are willing to participate.
       
        <div style={{
          padding: '2rem',
        }}>
           <Link href={`https://docs.google.com/forms/d/e/1FAIpQLScnL52KKJzT0ziFZh5ugH1fxsuqiBQVVClmL7qJ4TgIZPNbqg/viewform?usp=sf_link`}>
        <button className={styles.submitButton}>
          Fill out this Google Form
        </button>
        </Link>
        </div>
        
      </main>

    </div>
  )
}

export default Home
