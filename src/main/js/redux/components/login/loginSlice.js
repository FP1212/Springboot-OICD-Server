import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    authenticate: !!localStorage.getItem("user"),
    user: localStorage.getItem("user"),
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload.user;
      state.authenticate = true;
    },
    signout: (state, action) => {
      state.user = null;
      state.authenticate = false;
    },
  },
});

export const selectLogin = (state) => state.login;
export default loginSlice.reducer;
export const { signin, signout } = loginSlice.actions;
