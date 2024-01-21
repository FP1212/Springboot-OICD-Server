import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import history from "Core/history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers/rootReducer";
import statusMiddleware from "../middleware/statusMiddleware";

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      routerMiddleware(history),
      statusMiddleware,
    ],
    devTools: true,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
