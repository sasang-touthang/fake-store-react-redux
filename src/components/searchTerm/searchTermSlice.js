import { createSlice } from "@reduxjs/toolkit";

const searchTerm = createSlice({
  name: "search",
  initialState: "",
  reducer: {
    setSearchTerm: (state, action) => {
      state = action.payload;
    },
    clearSearchTerm: (state, action) => {
      state = "";
    },
  },
});

const selectSearchTerm = (state) => state.search;

export const { setSearchTerm, clearSearchTerm } = searchTerm.actions;
export default searchTerm.reducer;
