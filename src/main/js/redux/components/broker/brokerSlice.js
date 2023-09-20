import { createSlice } from "@reduxjs/toolkit";

// Import broker
const broker = window.api.broker;

const brokerSlice = createSlice({
  name: "broker",
  initialState: { views: [] },
  reducers: {
    unsuscribe: (state, action) => {
      broker.unsuscribeToTopic(action.payload);
      return state.views
        ? {
            views: [
              ...state.views.filter(
                (view) => view !== action.payload.ipcChannel
              ),
            ],
          }
        : state;
    },
  },
});

export const selectBroker = (state) => {
  return state.broker.data;
};

/**
 * Enable update cards with the broker queue data associated
 * @param {*} ipcChannel
 * @returns
 */
export const suscribe = (config) => (dispatch) => {
  const { action, ...remaining } = config;
  broker.suscribeToTopic(remaining, (args) => {
    dispatch(action({ ...args, ...remaining }));
  });
};

/**
 * Resuscribe update cards with the broker queue data associated
 * @param {*} ipcChannel
 * @returns
 */
export const resuscribe = (config) => (dispatch) => {
  const { action, ...remaining } = config;

  broker.resuscribeToTopic(remaining, (args) => {
    dispatch(action({ ...args, ...remaining }));
  });
};

export const sendRpcDirectReplyTo = (config) => (dispatch) => {
  const { action, ...remaining } = config;
  broker.sendRpcDirectReplyToRequest(remaining, (args) => {
    dispatch(action({ ...args, ...remaining }));
  });
};

export const unsuscribeAll =
  ({ action }) =>
  (dispatch) => {
    broker.unsuscribeAll(() => {
      if (action) dispatch(action());
    });
  };

export default brokerSlice.reducer;
export const { request, update, unsuscribe } = brokerSlice.actions;
