import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import {
  collection,
  doc,
  deleteDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../../pages/_app";
import { useEffect, useState } from "react";
import DeleteModal from "./modals/DeleteModal";
import RecipeModal from "./modals/RecipeModal";
import { useRouter } from "next/router";

const UserFavorites = () => {
  const [userSavedRecipes, setUserSavedRecipes] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRecipeModal, setOpenRecipeModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const router = useRouter();
  const userSignedIn = router.query.userID;

  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });

  const deleteRecipe = async (recipe: any) => {
    try {
      const recipeDoc = doc(db, "recipes", "DR");
      await deleteDoc(recipeDoc);
      toast({
        status: "success",
        description: "Recipe deleted successfully",
      });
      setIsDeleted(true);
      setOpenDeleteModal(false);
    } catch (error) {
      const errorMessage = error.message;
      console.log(error);
      console.log(errorMessage);
      toast({
        status: "error",
        description: errorMessage,
      });
    }
  };

  useEffect(() => {
    const getSavedRecipes = async () => {
      try {
        const docRef = collection(db, "user");
        const querySnapshot = await getDocs(docRef);
        const savedRecipes = [];
        querySnapshot.forEach((doc) => savedRecipes.push(doc.data()));
        console.log("saved recipes: ", savedRecipes);
        setUserSavedRecipes(savedRecipes);
        return savedRecipes;
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    };

    getSavedRecipes();
  }, []);

  /*   console.log(userSavedRecipes); */

  return (
    <Flex mt={7} color="black" flexDir={"column"}>
      <Text as={"h3"} fontSize="2xl">
        Favorites
      </Text>
      <Text>Recipes you save would be displayed here.</Text>
      <Flex flexDir="row">
        {!isDeleted &&
          userSavedRecipes?.length > 0 &&
          userSavedRecipes.map((recipe: any) => {
            const { recipeName, ingredients, instructions, cookTime } = recipe;
            return (
              <Box
                key={`recipe-${recipe.id}`}
                bgColor={"gray.200"}
                rounded="xl"
                p={4}
              >
                <Text color="black">{recipe.recipeName}</Text>
                <Flex justifyContent={"space-between"} gap={3} my={4}>
                  <Button
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    fontSize="sm"
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
                    onClick={() => setOpenRecipeModal(true)}
                  >
                    READ MORE
                  </Button>
                  <Button
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    fontSize="sm"
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
                    onClick={() => setOpenDeleteModal(true)}
                  >
                    DELETE
                  </Button>
                </Flex>
                <RecipeModal
                  isOpen={openRecipeModal}
                  onRequestClose={() => setOpenRecipeModal(false)}
                  maxWidth={""}
                  showCloseIcon={false}
                  recipe={{ recipeName, ingredients, instructions, cookTime }}
                />
                <DeleteModal
                  isOpen={openDeleteModal}
                  onRequestClose={() => setOpenDeleteModal(false)}
                  maxWidth={""}
                  actionTitle={"Delete Recipe"}
                  actionDesc={
                    "Are you sure you want to delete this recipe? You can't undo this action"
                  }
                  yesText={"YES, DELETE"}
                  noText={"CANCEL"}
                  yesAction={() => deleteRecipe(recipe)}
                />
              </Box>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default UserFavorites;
