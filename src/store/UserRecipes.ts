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

      const newRecipes = { ...action.payload, id: lastRecipeId + 1 };
      state.value.push(newRecipes);
    },
    deleteRecipes: (
      state: { value: recipesType[] },
      action: PayloadAction<number>
    ) => {
      /* state.value = state.value.filter((recipe) => recipe.id != action.payload); */
      const index = state.value.findIndex(
        (recipe) => recipe.id === action.payload
      );
      if (index !== -1) {
        state.value.splice(index, 1);
      }
      console.log(action.payload);
    },
  },
});

export const { addRecipes, deleteRecipes } = userRecipesSlice.actions;
export default userRecipesSlice.reducer;
