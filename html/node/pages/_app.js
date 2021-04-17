import Head from 'next/head';

import '../styles/styles.scss'
import { Header, Footer } from "../components";
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
                    <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp;
