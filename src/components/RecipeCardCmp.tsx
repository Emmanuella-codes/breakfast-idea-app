import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { TfiAlarmClock } from "react-icons/tfi";

interface RecipeCardProps {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  cookTime: string;
}

const RecipeCardCmp: React.FC<RecipeCardProps> = ({
  recipeName,
  ingredients,
  instructions,
  cookTime,
}) => {
  return (
    <Box boxShadow="xl" p="6" rounded="md" bg="white" color={"black"}>
      <Box>
        <Text>{recipeName}</Text>
      </Box>
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
      <Text>{`${(<TfiAlarmClock />)}: ${cookTime} `}</Text>
    </Box>
  );
};

export default RecipeCardCmp;
