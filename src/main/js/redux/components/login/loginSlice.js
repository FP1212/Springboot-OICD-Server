import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { user: "", token: "", authorized: false, status: 0 },
  reducers: {
    sign: (state, action) => {
      state.user = action.payload.user;
      state.authorized = action.payload.authorized;
      state.status = action.payload.status;
    },
    signout: (state, action) => {
      //Import mysql database models
//      db.logout(state.user);
      state.user = "";
      state.authorized = false;
      state.status = 0;
    },
    status: (state, action) => {
      state.status = action.payload.status;
    },
    clear: (state, action) => {},
  },
});

export const selectLogin = (state) => {
  return state.login;
};

/**
 * Async login action
 * @param {*} credentials
 * @returns
 */
export const login = (credentials) => (dispatch, store) => {
//  db.login(credentials.email, credentials.password).then((authorized) => {
//    dispatch(
//      sign({
//        authorized: authorized,
//        user: credentials.email,
//        status: authorized ? 1 : 2,
//      })
//    );
//  });
};

export default loginSlice.reducer;
export const { sign, signout, status, clear   } = loginSlice.actions;
