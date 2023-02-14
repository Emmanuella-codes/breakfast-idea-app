import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import ModalCmp from "./ModalCmp";
import { RecipeCardProps } from "components/RecipeCmp/RecipeCardCmp";
import { TfiAlarmClock } from "react-icons/tfi";
import { useRouter } from "next/router";

const RecipeModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  maxWidth: string;
  showCloseIcon: boolean;
  recipe: RecipeCardProps;
  isSaved?: boolean;
  saveRecipe?: (e: RecipeCardProps) => void;
}> = ({ isOpen, onRequestClose, maxWidth, showCloseIcon, recipe }) => {
  const { recipeName, ingredients, instructions, cookTime } = recipe;

  const router = useRouter();
  const userSignedIn = router.query.userID;

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
          {userSignedIn && (
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
                onClick={() => {}}
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
