import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {},
  reducers: {
    update: (state, action) => {
      const items = { ...state.items };
      items[action.payload.source] = action.payload.data;
      state.items = items;
    },
  },
});

export const selectDrawer = (state) => state.drawer;
export default drawerSlice.reducer;
export const { update } = drawerSlice.actions;
