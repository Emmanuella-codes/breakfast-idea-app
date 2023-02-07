import { recipes, recipesType } from "./recipeData";

export const searchByIngredient = (ingredient: string): recipesType[] => {
  const results = recipes.filter((recipe) =>
    recipe.ingredients.some((text) =>
      text.toLowerCase().includes(ingredient.toLowerCase())
    )
  );
  return results;
};

export const generateRandomRecipe = (): recipesType[] => {
  return [recipes[Math.floor(Math.random() * recipes.length)]];
};
