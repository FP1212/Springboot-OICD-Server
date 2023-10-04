import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:9090/api/v1/auth/";

const loginSlice = createSlice({
  name: "login",
  initialState: { user: "", token: "", authorized: false, status: 0 },
  reducers: {
    signin: (state, { username, password } = action) => {
      return axios
        .post(API_URL + "signin", {}, { params: { username, password } })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }

          return response.data;
        });
    },
    signup: (state, action) => {
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

export default loginSlice.reducer;
export const { signin, signup, status, clear } = loginSlice.actions;
