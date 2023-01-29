import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
  "allProducts/loadProducts",
  async (arg, thunkAPI) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
  }
);

const allProducts = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    isFulfilled: false,
    isError: false,
  },
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.isFulfilled = false;
      state.isError = false;
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isFulfilled = true;
      state.isError = false;
    },
    [loadProducts.rejected]: (state, action) => {
      state.isFulfilled = false;
      state.isError = true;
    },
  },
});

export const selectAllProducts = (state) => state.AllProducts.products;
export default allProducts.reducer;
