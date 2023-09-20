import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { openDrawer: false, anchor: "right", tabIndex: 0 },
  reducers: {
    toggleDrawer: (state, action) => {
      state.openDrawer = !state.openDrawer;
    },
    selectTab: (state, action) => {
      state.tabIndex = action.payload.tabIndex;
    },
  },
});

export const selectNav = (state) => state.nav;

export const tabItems = ["Resumen", "Kinetics", "Environment", "Inertials"];
export default navSlice.reducer;
export const { toggleDrawer, selectTab } = navSlice.actions;
