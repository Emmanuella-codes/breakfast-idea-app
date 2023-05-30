import { Flex } from "@chakra-ui/react";
import RecipeCardCmp from "./RecipeCmp/RecipeCardCmp";

const SampleRecipes = () => {
  const sampleData = [
    {
      name: "Fried Eggs, Bread and Tea",
      ingredients: [
        "4 Fresh eggs",
        "50 ml Vegetable oil",
        "1/2 cup chopped tomatoes",
        "Small chopped onions",
        "1 sliced pepper (scotch bonnet)",
        "Salt to taste",
        "Seasoning cube (a pinch)",
      ],
      instructions: [
        "Heat your frying pan for a minute then add 50 ml of vegetable oil, allow to heat for 30 seconds before adding the sliced onions, then tomato/pepper as well.",
        "Fry for 5 minutes before spraying a pinch of salt (to taste), then about a half of seasoning cube (I prefer less)",
        "Stir, and then make sure they spread evenly it on the frying pan and boiling in very little oil. Then pour in the (already broken and mixed eggs) to cover the onions, tomato combination.",
        "Allow frying for a minute before flipping.",
        "Allow another 1 minute.",
        "Flip. Flip again.",
      ],
      cookTime: "8 minutes",
    },
    {
      name: "Oblayo",
      ingredients: ["Corn (roughly ground)", "Water", "Sugar", "Milk"],
      instructions: [
        "Pour some corn into a bowl and add water to it.",
        "Stir and wait for the corn to settle, the chaff will surface, then pour away the chaff from it.",
        "Put water on fire in a saucepan, pour in your corn and stir.",
        "Stir from time to time and leave it to cook for a while.",
        "Cook until you can squash the corn.",
        "If you want it lighter, you can add some more water and stir and let it cook for a little more time.",
        "Pour into a bowl when it’s ready and add your sugar and milk as you want it.",
      ],
      cookTime: "10 minutes",
    },
  ];

  return (
    <Flex gap="6" mt={"10"} mx="auto" flexDir={{ base: "column", md: "row" }}>
      {sampleData.map((recipe, index) => (
        <RecipeCardCmp
          id={index}
          key={index}
          recipeName={recipe.name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          cookTime={recipe.cookTime}
        />
      ))}
    </Flex>
  );
};

export default SampleRecipes;
