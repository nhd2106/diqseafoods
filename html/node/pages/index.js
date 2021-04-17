import Head from "next/head";
import { Carousel, Welcome } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DIQ Seafoods</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Carousel />
      <Welcome/>
    </div>
  );
}
