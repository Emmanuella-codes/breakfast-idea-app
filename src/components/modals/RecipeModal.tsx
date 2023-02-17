import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/react";
import ModalCmp from "./ModalCmp";
import RecipeCardCmp, {
  RecipeCardProps,
} from "components/RecipeCmp/RecipeCardCmp";
import { TfiAlarmClock } from "react-icons/tfi";
import { useRouter } from "next/router";
import { db } from "../../../pages/_app";
import {
  collection,
  getFirestore,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const RecipeModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  maxWidth: string;
  showCloseIcon: boolean;
  recipe: RecipeCardProps;
}> = ({ isOpen, onRequestClose, maxWidth, showCloseIcon, recipe }) => {
  const { recipeName, ingredients, instructions, cookTime } = recipe;

  const [isSaved, setIsSaved] = useState(false);

  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });

  const router = useRouter();
  const userId = router.query.userID;

  const saveRecipe = async (recipe) => {
    try {
      const docRef = collection(db, "user", `${userId}`, "recipe");
      await setDoc(doc(docRef), recipe);
      console.log(setDoc);
      toast({
        status: "success",
        description: "Recipe saved successfully",
      });
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error saving recipe: ", error);
      toast({
        status: "error",
        description: errorMessage,
      });
    }
  };

  useEffect(() => {
    const checkRecipeSaved = async () => {
      try {
        const docRef = doc(db, "user", recipeName, `${userId}`, "recipe");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsSaved(true);
        } else {
          setIsSaved(false);
        }
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    };

    if (userId) {
      checkRecipeSaved();
    }
  }, [userId, recipeName]);

  return (
    <>
      <ModalCmp
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentStyles={{ maxWidth: maxWidth || "350px" }}
        shouldFocusAfterRender={false}
        contentLabel="Terms"
        id="terms"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        showCloseIcon={showCloseIcon}
      >
        <Box px={5}>
          <Text fontSize={"4xl"} fontWeight={800}>
            {recipeName}
          </Text>
        </Box>
        <Box bg={"gray.50"} px={6} py={5} color="black">
          <Text fontSize={"lg"} fontWeight="500">
            Ingredients:{" "}
          </Text>
          <UnorderedList>
            {ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>
          <Box pt={3}>
            <Text fontWeight="500" fontSize={"lg"}>
              Instructions:
            </Text>
          </Box>
          <UnorderedList>
            {instructions.map((steps) => (
              <ListItem key={steps}>{steps}</ListItem>
            ))}
          </UnorderedList>
          <Flex flexDir={"row"} alignItems={"center"} gap={5} py={4}>
            <Icon as={TfiAlarmClock} boxSize={6} />
            <Text>{` ${cookTime} `}</Text>
          </Flex>
          {userId && !isSaved && (
            <Box>
              <Button
                w={"full"}
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
                onClick={() => saveRecipe(recipe)}
              >
                SAVE
              </Button>
            </Box>
          )}
        </Box>
      </ModalCmp>
    </>
  );
};

export default RecipeModal;
