import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import history from "Core/history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers/rootReducer";
//hashHistory funciona para paginas estaticas como las de electron

const store = configureStore(
  {
    reducer: rootReducer,
    //getDefaultMiddleware agrega los middleware de thunk, inmutable y serialized,
    //pero la plantilla desactiva este ultimo, y concatena el de connect-react-router
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      routerMiddleware(history),
    ],
    devTools: false,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
