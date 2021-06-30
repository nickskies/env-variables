import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      Base Url: {process.env.NEXT_PUBLIC_BASE_URL}
    </div>
  )
}
