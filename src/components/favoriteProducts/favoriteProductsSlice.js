import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

// export const addFavoriteProduct = createAction("addFavoriteProduct");
// export const removeFavoriteProduct = createAction("removeFavoriteProduct");

const favoriteProducts = createSlice({
  name: "favoriteProduct",
  initialState: [],
  reducers: {
    addFavoriteProduct: (state, action) => {
      const { id } = action.payload;
      const dupe = state.find((obj) => obj.id === id);
      if (dupe) {
        alert("Product already added to Favorites");
      } else {
        state.push(action.payload);
      }
    },
    removeFavoriteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addFavoriteProduct, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeFavoriteProduct, (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    });
  },
});

export const selectFavoriteProducts = (state) => state.favoriteProducts;
export const selectFilteredFavoriteProducts = (state) => {
  const favoriteProducts = selectFavoriteProducts(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export const { addFavoriteProduct, removeFavoriteProduct } =
  favoriteProducts.actions;
export default favoriteProducts.reducer;
