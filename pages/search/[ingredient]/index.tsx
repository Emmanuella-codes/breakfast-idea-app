import { Box, Text } from "@chakra-ui/react";
import RecipeCardCmp from "components/RecipeCmp/RecipeCardCmp";
import RecipeCardList from "components/RecipeCmp/RecipeCardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchByIngredient } from "utils/getRecipes";
import { recipes } from "utils/recipeData";

const IngredientPage = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { ingredient } = router.query;

  useEffect(() => {
    const results = searchByIngredient(ingredient as string);
    setSearchedRecipes(results);
    setLoading(false);
  }, [ingredient]);

  return (
    <Box>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <RecipeCardList recipes={searchedRecipes} />
      )}
    </Box>
  );
};

export default IngredientPage;
