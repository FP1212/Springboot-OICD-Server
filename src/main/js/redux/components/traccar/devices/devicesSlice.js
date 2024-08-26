import { createSlice } from '@reduxjs/toolkit';

const devicesSlice = createSlice({
  name: 'devices',
  initialState: [],
  reducers: {
    setDevices: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const selectDevices = (state) => state.devices;
export const selectDeviceByDeviceId = (uniqueId) => (state) =>
  state.devices?.filter((device) => uniqueId === device.uniqueId);
export default devicesSlice.reducer;
export const { setDevices } = devicesSlice.actions;
