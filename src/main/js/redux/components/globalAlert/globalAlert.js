import { createSlice } from "@reduxjs/toolkit";

const globalAlert = createSlice({
  name: "globalAlert",
  initialState: {
    open: false,
    severity: "",
    message: "",
  },
  reducers: {
    show: (state, action) => {
      const {open = false, severity = "error", message = ""} = action.payload;
      state.open = open;
      state.severity = severity;
      state.message = message;
    },
  },
});

export const selectGlobalAlert = (state) => state.globalAlert;
export default globalAlert.reducer;
export const { show } = globalAlert.actions;
