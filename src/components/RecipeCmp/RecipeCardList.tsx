import RecipeCardCmp from "./RecipeCardCmp";
import { recipesType } from "utils/recipeData";
import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const RecipeCardList: React.FC<{ recipes: recipesType[] }> = ({ recipes }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const handleLoadMore = () => {
    setStartIndex(startIndex + 10);
    setEndIndex(endIndex + 10);
  };

  return (
    <Box>
      <Flex
        flexDir={{ base: "row", lg: "row" }}
        justifyContent={{ md: "space-between" }}
        maxW=""
        flexWrap={"wrap"}
      >
        {recipes.slice(startIndex, endIndex).map((recipe) => (
          <RecipeCardCmp
            key={recipe.id}
            recipeName={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            cookTime={recipe.cookTime}
          />
        ))}
      </Flex>
      {endIndex < recipes.length && (
        <Box>
          <Button
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RecipeCardList;
