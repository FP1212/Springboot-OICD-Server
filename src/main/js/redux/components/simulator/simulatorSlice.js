import { createSlice } from "@reduxjs/toolkit";
import defaultInitialState from "Constants/layouts/simulator";

const simulatorSlice = createSlice({
  name: "simulator",
  initialState: defaultInitialState,
  reducers: {
    toggle: (state, action) => {
      return action.payload ? action.payload : state;
    },
    updateForm: (state, action) => {
      debugger;
      state.formData = action.payload;
    },
  },
});

export const selectSimulatorState = (state) => state.simulator.controls;
export const selectSimulatorForm = (state) => state.simulator.formData;

export default simulatorSlice.reducer;
export const { toggle, updateForm } = simulatorSlice.actions;
