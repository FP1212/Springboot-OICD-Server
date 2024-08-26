import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    setEvents: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const selectEvents = (state) => state.events;
export const selectEventByDeviceId = (deviceId) => (state) =>
  state.events?.filter((event) => deviceId === event.deviceId);
export default eventsSlice.reducer;
export const { setEvents } = eventsSlice.actions;
