import { createSlice } from "@reduxjs/toolkit";

const searchTerm = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    clearSearchTerm: (state, action) => (state = ""),
  },
});

export const selectSearchTerm = (state) => state.searchTerm;

export const { setSearchTerm, clearSearchTerm } = searchTerm.actions;
export default searchTerm.reducer;
