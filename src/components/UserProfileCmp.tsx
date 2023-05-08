import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  Button,
} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { searchByIngredient, generateRandomRecipe } from "utils/getRecipes";
import RecipeModal from "components/modals/RecipeModal";
import { RecipeCardProps } from "./RecipeCmp/RecipeCardCmp";
import UserFavorites from "./UserFavorites";

const UserProfileCmp = () => {
  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });

  const [userName, setUserName] = useState(null);
  const [searchRecipes, setSearchRecipes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<RecipeCardProps>({
    recipeName: "",
    ingredients: [],
    instructions: [],
    cookTime: "",
    id: 0,
  });

  const auth = getAuth();
  const router = useRouter();
  /* const { query } = useRouter();
  const userID = query.userID as string; */
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast({
          status: "success",
          description: "Logged out successfully",
        });
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast({
          status: "error",
          description: errorMessage,
        });
      });
  };

  const handlegeneratedRecipe = () => {
    const [recipe] = generateRandomRecipe();
    setGeneratedRecipe({
      recipeName: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      cookTime: recipe.cookTime,
      id: recipe.id,
    });
    setOpenModal(true);
  };

  const formik = useFormik({
    initialValues: { searchQuery: "" },
    onSubmit: (values) => {
      setSearchRecipes(searchByIngredient(values.searchQuery));
      router.push({
        pathname: "/search/[ingredient]",
        query: { ingredient: values.searchQuery },
      });
    },
  });

  useEffect(() => {
    const userData = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else {
        setUserName(null);
      }
    });
    return () => userData();
  }, [auth, searchRecipes]);

  return (
    <>
      <Container maxW="5xl" mb="10">
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
        <Box mb="7" color="#000">
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={500}>
            Hello {`${userName}`},
          </Text>
        </Box>
        <Box mt="7">
          <form onSubmit={formik.handleSubmit}>
            <Flex gap={9} justifyContent="center">
              <FormControl id="search" w="50%">
                <Input
                  id="search"
                  type="text"
                  name="searchQuery"
                  placeholder="search e.g eggs"
                  _placeholder={{ color: "gray.500" }}
                  color="#000"
                  border="1px solid black"
                  value={formik.values.searchQuery}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <Box
                as={Button}
                cursor={"pointer"}
                bgColor={"green.400"}
                borderRadius="15px"
                p="0.8rem 1rem"
                type="submit"
                isLoading={formik.isSubmitting}
                isDisabled={formik.isValid ? false : true}
                onClick={() => {
                  formik.handleSubmit;
                }}
                _hover={{
                  bgColor: "green.600",
                }}
                color="#FFF"
              >
                SUBMIT
              </Box>
            </Flex>
          </form>
        </Box>
        <Box
          mt={7}
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"center"}
          gap={5}
          alignItems="center"
        >
          <Text color="black">You can also click here to generate recipes</Text>
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
            onClick={handlegeneratedRecipe}
          >
            CLICK HERE
          </Button>
        </Box>
        {/* favorites section: user saved recipes will be displayed here */}
        <UserFavorites />
        <Box mt={16}>
          <Box
            as={Button}
            bgColor="blue.400"
            onClick={handleSignOut}
            color="#FFF"
            _hover={{ bg: "blue.900" }}
            rounded={"xl"}
          >
            LOGOUT
          </Box>
        </Box>
        <RecipeModal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          maxWidth={""}
          showCloseIcon={true}
          recipe={generatedRecipe}
        />
      </Container>
    </>
  );
};

export default UserProfileCmp;
