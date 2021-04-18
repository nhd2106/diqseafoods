import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { DefaultSeo } from "next-seo";

import '../styles/styles.scss';
import { Header, Footer } from "../components";

import SEO from "../next-seo.config";


function MyApp({ Component, pageProps }) {
  const [is_visible, setIs_visible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIs_visible(true);
    } else {
      setIs_visible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
                    <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
    </Head>
    <DefaultSeo {...SEO} />
    <Header/>
    <Component  {...pageProps} />
    {is_visible ? (
          <button
            variant="contained"
            color="primary"
            className="toTopButton"
            onClick={scrollToTop}
            style={{ zIndex: 1000 }}
          >
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
        ) : null}
    <Footer/>
    </>
  )
}

export default MyApp;
