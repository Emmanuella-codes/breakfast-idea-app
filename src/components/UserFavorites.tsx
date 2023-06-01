import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DeleteModal from "./modals/DeleteModal";
import RecipeModal from "./modals/RecipeModal";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipes } from "store/UserRecipes";

const UserFavorites = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRecipeModal, setOpenRecipeModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [displayedRecipes, setDisplayedRecipes] = useState(3);

  const router = useRouter();
  const userSignedIn = router.query.userID;

  const dispatch = useDispatch();
  const userRecipes = useSelector((state: any) => state.value);

  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });

  const loadMore = () => {
    setDisplayedRecipes(displayedRecipes + 6);
  };

  const handleDeleteRecipe = (idx: number) => {
    dispatch(deleteRecipes(idx));
    toast({
      status: "success",
      description: "Recipe deleted successfully",
    });
    setOpenDeleteModal(false);
  };

  return (
    <Flex mt={7} color="#000" flexDir={"column"} mx={{ base: "auto" }}>
      <Text as={"h3"} fontSize="2xl">
        Favorites
      </Text>
      <Text>Recipes you save would be displayed here.</Text>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={3}
        w="full"
        flexWrap="wrap"
      >
        {userRecipes?.length > 0 &&
          userRecipes
            .slice(0, displayedRecipes)
            .map((recipe: any, idx: number) => {
              /* const { recipeName, id } = recipe; */
              return (
                <Box
                  key={idx}
                  bgColor={"gray.200"}
                  rounded="xl"
                  p={4}
                  w={{ base: "80%", md: "30%" }}
                >
                  <Text color="#000">{recipe.recipeName}</Text>
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
                    recipe={recipe}
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
                    yesAction={() => {
                      console.log(idx);
                      console.log(recipe.id);
                      handleDeleteRecipe(idx);
                    }}
                  />
                </Box>
              );
            })}
      </Flex>
      {userRecipes?.length > displayedRecipes && (
        <Box mt={5}>
          <Button
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
            onClick={loadMore}
          >
            Load More
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default UserFavorites;
