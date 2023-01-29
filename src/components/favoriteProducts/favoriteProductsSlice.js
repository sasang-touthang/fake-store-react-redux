import { createSlice } from "@reduxjs/toolkit";

const favoriteProducts = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipes: (state, action) => {
      state.push(action.payload);
    },
    removeRecipes: (state, action) => {
      state.filter(
        (product) =>
          product.id.toLowerCase() !== action.payload.id.toLowerCase()
      );
    },
  },
});

export const selectFavoriteProducts = (state) => state.favoriteProducts;
export const { addRecipes, removeRecipes } = favoriteProducts.actions;
export default favoriteProducts.reducer;
