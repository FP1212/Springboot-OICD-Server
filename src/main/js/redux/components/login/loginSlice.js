import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_ROUTES from "Constants/apiRoutes.js";
import { Exception } from "sass";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    authenticate: localStorage.getItem("user") ? true : false,
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

export const login =
  ({ username, password, rememberMe }) =>
  (dispatch) => {
    axios
      .post(
        API_ROUTES.SIGNIN,
        {
          username,
          password,
          rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data, status }) => {
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(data));

          dispatch(
            signin({
              user: data,
            })
          );
        } else {
          throw new Exception("Null Token");
        }
      })
      .catch((error) => {
        localStorage.removeItem("user", JSON.stringify(data.token));
        dispatch(signout());
        console.error(error);
      });
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(signout());
};

export const signup = (data) => (dispatch) => {
  axios
    .post(API_ROUTES.SIGNUP, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data, status }) => {
      console.log(data);
      //  TODO make redirect or something after succesfully register
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loginSlice.reducer;
export const { signin, signout } = loginSlice.actions;
