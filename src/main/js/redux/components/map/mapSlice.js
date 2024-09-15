import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    viewState: {
      latitude: 10.423,
      longitude: -75.5472,
      zoom: 14,
    },
    mapStyle: 'https://api.maptiler.com/maps/streets/style.json?key=zwNFiAFTEXqX7BGOKlfM',
  },
  reducers: {
    setViewState: (state, { payload }) => {
      state.viewState = { ...state.viewState, ...payload };
    },
  },
});

export const selectMapStyle = (state) => state.map.mapStyle;
export const selectMapViewState = (state) => state.map.viewState;
export default mapSlice.reducer;
export const { setViewState } = mapSlice.actions;
