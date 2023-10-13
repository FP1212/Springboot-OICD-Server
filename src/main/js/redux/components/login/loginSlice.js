import { createSlice } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import API_ROUTES from "Constants/apiRoutes.js";

const loginSlice = createSlice({
  name: "login",
  initialState: { authenticate: false },
  reducers: {
    signing: (state, action) => {
      state.authenticate = action.payload.authenticate;
    },
  },
});

export const selectLogin = (state) => state.login;

export const login =
  ({ username, password, rememberMe }) =>
  (dispatch) => {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    if (rememberMe) {
      params.append("remember-me", rememberMe);
    }

    axios
      .post(API_ROUTES.LOGIN, params)
      .then((response) => {
        dispatch(
          signing({ authenticate: response.status === HttpStatusCode.Ok })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

export const signup = (data) => (dispatch) => {
  axios
    .post(API_ROUTES.SIGNUP, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      //  TODO make redirect or something after succesfully register
      // dispatch(
      //   signing({ authenticate: response.status === HttpStatusCode.Ok })
      // );
    })
    .catch((error) => {
      console.error(error);
    });
};

export const isValidSession = () => (dispatch) => {
  axios
    .get(API_ROUTES.IS_VALID_SESSION)
    .then((response) => {
      dispatch(signing({ authenticate: response.data.authenticate }));
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loginSlice.reducer;
export const { signing } = loginSlice.actions;
