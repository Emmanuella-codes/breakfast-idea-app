import { recipes, recipesType } from "./recipeData";
import { RecipeCardProps } from "components/RecipeCmp/RecipeCardCmp";

export const searchByIngredient = (ingredient: string): recipesType[] => {
  const results = recipes.filter((recipe) =>
    recipe.ingredients.some((text) =>
      text.toLowerCase().includes(ingredient.toLowerCase())
    )
  );
  return results;
};

/* export const generateRandomRecipe = (): recipesType[] => {
  const randomRecipe = [recipes[Math.floor(Math.random() * recipes.length)]];
  console.log(randomRecipe);
  return randomRecipe;
}; */

export const generateRandomRecipe = (): RecipeCardProps => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomIndex];
  console.log(randomRecipe);
  return {
    recipeName: randomRecipe.name,
    ingredients: randomRecipe.ingredients,
    instructions: randomRecipe.instructions,
    cookTime: randomRecipe.cookTime,
  };
};
