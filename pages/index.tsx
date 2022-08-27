import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nae raste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </Head>

      <main className={styles.mainDiksha}>
        <h1 className={styles.title}>
      <Image src="/intersect.png" alt="notebook" width={50} height={50} />
         nae raste │
         research
        </h1>
        
        <div style={{
          lineHeight: '1.8',
          padding: '4rem',
          fontSize: '1.5rem',
          textAlign: 'justify',
          marginBottom: '1rem',
          
        }}>
          
          The best learning happens when you teach. 
          We are a team of researchers and educators and we want to help you learn. 
          With nae raste, we are launching a <u style={{
           
            color: '#00bcd4'
          }}>peer-to-peer offline tutoring program</u>.
          If you are a student in class 8 or above, you can participate in this research.<br/>
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
              You will be learning or teaching for 2-3 hrs per week for 1 month.
            </li>
            <li>
              You will be able to choose a chapter you want to teach or learn. We can also help with assigning chapters to you.
            </li>
            <li>
              At the beginning and at the end of this period, you will take a test on that chapter. This will help us compare progress.
            </li>
            <li>
              Teaching is meant to happen offline. So, tecaher can choose a place of his/her convinience to teach.
            </li>
            <li>
              It will be a good idea to inform your parents about this project, and that you are participating.
            </li>
          </ul>
        </div>
        If you are willing to participate.
        <Link href={`https://docs.google.com/forms/d/e/1FAIpQLScnL52KKJzT0ziFZh5ugH1fxsuqiBQVVClmL7qJ4TgIZPNbqg/viewform?usp=sf_link`}>
        <button className={styles.submitButton}>
          Fill out this Google Form
        </button>
        </Link>
        
      </main>

    </div>
  )
}

export default Home
