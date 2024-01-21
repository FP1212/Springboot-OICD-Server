import { createSlice } from "@reduxjs/toolkit";

export const createCustomSliceWithStatus = (name, initialState, reducers) => {
  const slice = createSlice({
    name,
    initialState: {
      status: null,
      message: "",
      ...initialState,
    },
    reducers: {
      setStatusAndMessage: (state, { payload }) => {
        state.status = payload.status;
        state.message = payload.message;
      },
      ...reducers,
    },
  });

  return slice;
};
