import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: "light", //"light" || "dark"
  reducers: {
    toggle: (state, action) => {
      return action.payload ? action.payload : state;
    },
  },
});

export const selectDarkModeState = (state) => state.dark === "dark";
export const selectDarkMode = (state) => state.dark;

export default darkSlice.reducer;
export const { toggle } = darkSlice.actions;
