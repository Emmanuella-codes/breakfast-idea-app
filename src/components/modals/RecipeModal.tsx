import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Icon,
} from "@chakra-ui/react";
import ModalCmp from "./ModalCmp";
import { RecipeCardProps } from "components/RecipeCmp/RecipeCardCmp";
import { TfiAlarmClock } from "react-icons/tfi";

const RecipeModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  maxWidth: string;
  showCloseIcon: boolean;
  recipe: RecipeCardProps;
}> = ({ isOpen, onRequestClose, maxWidth, showCloseIcon, recipe }) => {
  const { recipeName, ingredients, instructions, cookTime } = recipe;
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
        <Box bg={"gray.50"} px={6} py={10} color="black">
          <Text>Ingredients: </Text>
          <UnorderedList>
            {ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>
          <Text>Instructions:</Text>
          <UnorderedList>
            {instructions.map((steps) => (
              <ListItem key={steps}>{steps}</ListItem>
            ))}
          </UnorderedList>
          <Flex flexDir={"row"} alignItems={"center"} gap={5}>
            <Icon as={TfiAlarmClock} />
            <Text>{` ${cookTime} `}</Text>
          </Flex>
        </Box>
      </ModalCmp>
    </>
  );
};

export default RecipeModal;
