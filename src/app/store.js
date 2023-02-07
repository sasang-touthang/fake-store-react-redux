import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "../components/allProducts/allProductsSlice";
import favoriteProductsReducer from "../components/favoriteProducts/favoriteProductsSlice";
import searchTermReducer from "../components/searchTerm/searchTermSlice";

export default configureStore({
  reducer: {
    allProducts: allProductsReducer,
    favoriteProducts: favoriteProductsReducer,
    searchTerm: searchTermReducer,
  },
});
