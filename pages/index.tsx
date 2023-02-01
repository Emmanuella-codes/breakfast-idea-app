import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeLayout from "../src/Layout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <>
      <Head>
        <title>Breakfast Ideas App</title>
        <meta
          name="description"
          content="Find delicious and common breakfast ideas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout />
    </>
  );
};

export default index;
