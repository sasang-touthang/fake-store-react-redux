import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

export const loadProducts = createAsyncThunk(
  "allProducts/loadProducts",
  async (arg, thunkAPI) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
  }
);

export const removeProduct = createAction("removeProduct");
export const addToAllProducts = createAction("addToAllProducts");

const allProducts = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    isFulfilled: false,
    isError: false,
  },
  reducers: {
    addToAllProducts: (state, action) => {
      state.products = [action.payload, ...state.products].sort(
        (a, b) => a.id - b.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToAllProducts, (state, action) => {
        state.products = [action.payload, ...state.products].sort(
          (a, b) => a.id - b.id
        );
      })
      .addCase(removeProduct, (state, action) => {
        const newState = state.products.filter(
          (product) => product.title !== action.payload.title
        );
        state.products = newState;
      })
      .addCase(loadProducts.pending, (state, action) => {
        state.isFulfilled = false;
        state.isError = false;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isFulfilled = true;
        state.isError = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isFulfilled = false;
        state.isError = true;
      });
  },
});

export const selectAllProducts = (state) => state.allProducts.products;
// export const { addToAllProducts } = allProducts.actions;

export const selectFilteredAllProducts = (state) => {
  const allProducts = selectAllProducts(state);
  const searchTerm = selectSearchTerm(state);

  return allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default allProducts.reducer;
