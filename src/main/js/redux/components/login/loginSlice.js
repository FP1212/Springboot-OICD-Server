import { createCustomSliceWithStatus } from "../../util/createCustomSliceWithStatus";

const loginSlice = createCustomSliceWithStatus(
  "login",
  {
    authenticate: !!localStorage.getItem("user"),
    user: localStorage.getItem("user"),
  },
  {
    signin: (state, { payload }) => {
      state.user = payload.user;
      state.authenticate = true;
    },
    signout: (state, { payload }) => {
      localStorage.removeItem("user");
      state.user = null;
      state.authenticate = false;
    },
  },
);

export const selectLogin = (state) => state.login;
export default loginSlice.reducer;
export const { signin, signout } = loginSlice.actions;
