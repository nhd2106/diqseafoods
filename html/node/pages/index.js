import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div>
     <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
  Click me
</button>
     </div>
    </div>
  )
}
