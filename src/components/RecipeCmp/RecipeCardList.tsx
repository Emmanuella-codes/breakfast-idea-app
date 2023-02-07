import RecipeCardCmp from "./RecipeCardCmp";
import { recipesType } from "utils/recipeData";
import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const RecipeCardList: React.FC<{ recipes: recipesType[] }> = ({ recipes }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const handleLoadMore = () => {
    setStartIndex(startIndex + 10);
    setEndIndex(endIndex + 10);
  };

  return (
    <Box>
      {recipes.slice(startIndex, endIndex).map((recipe) => (
        <RecipeCardCmp
          key={recipe.id}
          recipeName={recipe.name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          cookTime={recipe.cookTime}
        />
      ))}
      {endIndex < recipes.length && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </Box>
  );
};

export default RecipeCardList;
