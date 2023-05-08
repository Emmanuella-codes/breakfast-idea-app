import {
  Box,
  Flex,
  Icon,
  ListItem,
  Text,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import RecipeModal from "components/modals/RecipeModal";

export interface RecipeCardProps {
  id: number;
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  cookTime: string;
}

const RecipeCardCmp: React.FC<RecipeCardProps> = ({
  id,
  recipeName,
  ingredients,
  instructions,
  cookTime,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
      color={"black"}
      maxW={"400px"}
      w={"full"}
      mt={4}
      mb={6}
    >
      <Box>
        <Text fontSize={"4xl"} fontWeight={800}>
          {recipeName}
        </Text>
      </Box>
      <Box bg={"gray.50"} px={6} py={10} mt={3}>
        <Text>Ingredients: </Text>
        <UnorderedList>
          {ingredients.slice(0, 4).map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </UnorderedList>
        <Box mt={3}>
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
            onClick={() => setShowModal(true)}
          >
            Read More
          </Button>
        </Box>
      </Box>
      <RecipeModal
        isOpen={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
        maxWidth={"400px"}
        showCloseIcon={true}
        recipe={{
          id,
          recipeName,
          ingredients,
          instructions,
          cookTime,
        }}
      />
    </Box>
  );
};

export default RecipeCardCmp;
