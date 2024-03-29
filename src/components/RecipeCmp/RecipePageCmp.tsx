import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import RecipeCardCmp from "components/RecipeCmp/RecipeCardCmp";
import RecipeCardList from "components/RecipeCmp/RecipeCardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchByIngredient } from "utils/getRecipes";
import PageLoader from "components/AppLoader/PageLoader";

const RecipePageCmp = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { ingredient } = router.query;

  const prevBtnAction = () => {
    router.back();
  };

  useEffect(() => {
    const results = searchByIngredient(ingredient as string);
    setSearchedRecipes(results);
    setLoading(false);
  }, [ingredient]);

  return (
    <Container maxW="5xl" mb="10">
      <Box
        border={"2px solid #000"}
        rounded="3xl"
        width={{ base: "10%", md: "8%" }}
        mt="2"
        onClick={prevBtnAction}
        className="back-btn"
        py={1}
      >
        <ArrowBackIcon className="back-icon" boxSize={6} />
        <Text display={{ base: "none", md: "block" }}>Back</Text>
      </Box>
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 18, md: 25 }}
        py={{ base: 18, md: 25 }}
      >
        <Heading
          as="h1"
          fontWeight={800}
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color="#000"
          fontFamily={"Mitr"}
        >
          Breakfast Ideas
        </Heading>
      </Stack>
      <Box textAlign="center">
        <Text color={"black"}>Search results for: {ingredient}</Text>
      </Box>
      {loading ? (
        <PageLoader />
      ) : searchedRecipes.length === 0 ? (
        <Text textAlign="center" mt="4" fontWeight="bold">
          No search result for: {ingredient}
        </Text>
      ) : (
        <RecipeCardList recipes={searchedRecipes} />
      )}
    </Container>
  );
};

export default RecipePageCmp;
