import Head from "next/head";
import { Carousel, Welcome } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DIQ Seafoods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Welcome/>
    </div>
  );
}
