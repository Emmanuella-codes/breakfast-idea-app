import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { recipesType } from "utils/recipeData";

export const userRecipesSlice = createSlice({
  name: "userRecipes",
  initialState: { value: [] },
  reducers: {
    addRecipes: (
      state: { value: recipesType[] },
      action: PayloadAction<recipesType>
    ) => {
      const lastRecipe = state.value[state.value.length - 1];
      const lastRecipeId = lastRecipe ? lastRecipe.id : 0;

      const newRecipes = { ...action.payload, id: lastRecipeId + 1};
      state.value.push(newRecipes)
    },
    deleteRecipes: () => {},
    updateRecipes: () => {},
  },
});

export const { addRecipes, deleteRecipes, updateRecipes } =
  userRecipesSlice.actions;
export default userRecipesSlice.reducer;
