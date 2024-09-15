import { createSlice } from '@reduxjs/toolkit';

const deviceData = {
  id: 1,
  attributes: {},
  groupId: 0,
  calendarId: 0,
  name: 'gps103',
  uniqueId: '123456789012345',
  status: 'offline',
  lastUpdate: '2024-08-30T03:15:20.000+00:00',
  positionId: 1,
  phone: null,
  model: null,
  contact: null,
  category: null,
  disabled: false,
  expirationTime: null,
};

const devicesSlice = createSlice({
  name: 'devices',
  initialState: [],
  reducers: {
    setDevices: (state, { payload }) => {
      return [...payload];
    },
  },
});

export const selectDevices = (state) => state.devices;
export const selectDeviceByDeviceId = (uniqueId) => (state) =>
  state.devices?.filter((device) => uniqueId === device.uniqueId);
export default devicesSlice.reducer;
export const { setDevices } = devicesSlice.actions;
