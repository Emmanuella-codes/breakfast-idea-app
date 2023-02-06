import { Box, Text } from "@chakra-ui/react";
import RecipeCardCmp from "components/RecipeCardCmp";
import { useRouter } from "next/router";

const IngredientPage = () => {
  return (
    <RecipeCardCmp
      recipeName={""}
      ingredients={[]}
      instructions={[]}
      cookTime={""}
    />
  );
};

export default IngredientPage;
