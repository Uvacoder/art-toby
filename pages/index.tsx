import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby&apos;s Community art project.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spline scene="https://prod.spline.design/kGMgvh8IL-oGyowa/scene.splinecode"/>
      <p>Built by <b><Link href="https://aretav.com/toby">Toby</Link></b>. Always <b><Link href="https://github.com/developedbytoby/art-project">open source</Link></b>.</p>
    </div>
  )
}

export default Home
