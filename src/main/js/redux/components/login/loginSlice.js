import { createCustomSliceWithStatus } from "../../util/createCustomSliceWithStatus";

const loginSlice = createCustomSliceWithStatus(
  "login",
  {
    authenticate:
      !!localStorage.getItem("user") || !!sessionStorage.getItem("user"),
    user: JSON.parse(
      sessionStorage.getItem("user")
        ? sessionStorage.getItem("user")
        : localStorage.getItem("user"),
    ),
  },
  {
    signin: (state, { payload }) => {
      state.user = payload.user;
      state.authenticate = true;
      state.status = null;
      state.message = "";
    },
    signout: (state, { payload }) => {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      state.user = null;
      state.authenticate = false;
    },
  },
);

export const selectLogin = (state) => state.login;
export default loginSlice.reducer;
export const { signin, signout } = loginSlice.actions;
