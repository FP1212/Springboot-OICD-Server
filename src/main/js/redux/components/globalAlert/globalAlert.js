import { createSlice } from "@reduxjs/toolkit";

const globalAlert = createSlice({
  name: "globalAlert",
  initialState: {
    open: false,
    showLoading: false,
    severity: "info",
    message: "",
  },
  reducers: {
    show: (state, action) => {
      const {open = false, showLoading = false, severity = "error", message = ""} = action.payload;
      state.open = open;
      state.showLoading = showLoading;
      state.severity = severity;
      state.message = message;
    },
  },
});

export const selectGlobalAlert = (state) => state.globalAlert;
export default globalAlert.reducer;
export const { show } = globalAlert.actions;
