import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import RecipePageCmp from "components/RecipeCmp/RecipePageCmp";
import { useRouter } from "next/router";

const SearchRecipesLayout = () => {
  const router = useRouter();
  const prevBtnAction = () => {};

  return (
    <Box display={"flex"} flexDir={"column"}>
      <Navbar />
      <RecipePageCmp />
      <Box m="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default SearchRecipesLayout;
