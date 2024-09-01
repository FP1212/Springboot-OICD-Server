import { createSlice } from '@reduxjs/toolkit';

const positionsSlice = createSlice({
  name: 'positions',
  initialState: {},
  reducers: {
    setPositions: (state, { payload }) => {
      const { positions } = payload;
      if (positions?.length > 0) {
        return {
          ...state,
          ...positions.reduce((acc, position) => {
            acc[position.deviceId] = position;
            return acc;
          }, {}),
        };
      }
    },
  },
});

export const selectPositions = (state) => state.positions;
export const selectPositionsAsFeatureColletions = (state) => ({
  type: 'FeatureCollection',
  features: Object.values(state.positions).map((position) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [position.longitude, position.latitude] },
  })),
});

export const selectPositionByDeviceId = (deviceId) => (state) =>
  state.positions?.filter((position) => deviceId === position.deviceId);
export default positionsSlice.reducer;
export const { setPositions } = positionsSlice.actions;
