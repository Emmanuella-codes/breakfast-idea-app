import Head from "next/head";
/* import { Inter } from "@next/font/google"; */
import SearchRecipesLayout from "Layout/SearchRecipesLayout";

/* const inter = Inter({ subsets: ["latin"] }); */

const SearchRecipesPage = () => {
  return (
    <>
      <Head>
        <title>Breakfast Idea App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchRecipesLayout />
    </>
  );
};
export default SearchRecipesPage;
