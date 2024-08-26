import { createSlice } from '@reduxjs/toolkit';

const positionsSlice = createSlice({
  name: 'positions',
  initialState: [],
  reducers: {
    setPositions: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const selectPositions = (state) => state.positions;
export const selectPositionByDeviceId = (deviceId) => (state) =>
  state.positions?.filter((position) => deviceId === position.deviceId);
export default positionsSlice.reducer;
export const { setPositions } = positionsSlice.actions;
