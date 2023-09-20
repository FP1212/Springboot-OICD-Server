import { createSlice } from "@reduxjs/toolkit";

const MAX_BUFFER_SIZE = 4096;

const monitorSlice = createSlice({
  name: "monitor",
  initialState: {
    device: { name: "" },
    title: "",
    data: "",
    inputs: {},
    params: {},
    stop: false,
  },
  reducers: {
    toggle: (state, action) => {
      state.title = action.payload.title || state.title;
      if (action.payload.device.name != state.device.name) {
        state.device = action.payload.device;
        state.data = "";
        state.stop = false;
      } else {
        state.stop = false;
      }
    },
    playstop: (state, action) => {
      state.stop = !state.stop;
    },
    update: (state, action) => {
      if (state.device.name) {
        if (state.data.length < MAX_BUFFER_SIZE) {
          state.data = state.device.name
            ? state.data +
              "\n" +
              action.payload.data.map((data) => data.value).join("\n")
            : state.data;

          state.inputs = action.payload.data;
        } else {
          state.data = "";
        }
      }
    },
  },
});

export const selectMonitorTitle = (state) => state.monitor.title;
export const selectMonitorData = (state) => state.monitor.data;
export const selectMonitorInputs = (state) => state.monitor.inputs;
export const selectMonitorDevice = (state) => state.monitor.device.name;
export const selectMonitorDeviceSuscribedOptions = (state) =>
  state.monitor.device.brokerOptions;
export const selectMonitorPlayStopStatus = (state) => state.monitor.stop;

export default monitorSlice.reducer;
export const { update, toggle, playstop } = monitorSlice.actions;
