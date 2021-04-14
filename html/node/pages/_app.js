import Head from 'next/head';

import '../styles/globals.css'
import { Header } from "../components";
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head></Head>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
