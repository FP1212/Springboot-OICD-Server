import axios from "AxiosInstance";
import API_ROUTES from "../constants/apiRoutes.js";
import ROUTES from "../constants/routes.json";
import { signin, signout } from "../redux/components/login/loginSlice";
import history from "Core/history";
import { HttpStatusCode } from "axios";
import { show } from "../redux/components/globalAlert/globalAlert";

/**
 * Auth Service
 */
class AuthService {
  /**
   * SingIn method
   *
   * @param {*} { username, password, rememberMe }
   * @return {*}
   * @memberof AuthService
   */
  signin({ username, password, rememberMe }) {
    return (dispatch) => {
      dispatch(show({ showLoading: true }));
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
          },
        )
        .then(({ data, status }) => {
          if (data.token) {
            localStorage.setItem("user", JSON.stringify(data));

            dispatch(
              signin({
                user: data,
              }),
            );
          } else {
            throw new Error("Null Token");
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(
            show({
              open: true,
              severity: "warning",
              message: error.response.data.message,
            }),
          );
        });
    };
  }

  /**
   * SingOut Method
   *
   * @return {*}
   * @memberof AuthService
   */
  signout() {
    return (dispatch) => {
      const user = JSON.parse(localStorage.getItem("user"));

      axios
        .post(
          API_ROUTES.SIGNOUT,
          { userId: user.id },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .finally(() => {
          dispatch(signout());
        });
    };
  }

  /**
   * SignUp Method
   *
   * @param {*} data
   * @return {*}
   * @memberof AuthService
   */
  signup(data) {
    return (dispatch) => {
      axios
        .post(API_ROUTES.SIGNUP, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(({ data, status }) => {
          if (status === HttpStatusCode.Created) {
            history.push(ROUTES.SIGNIN);
          } else {
            dispatch(
              show({ open: true, severity: "error", message: data.message }),
            );
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(
            show({
              open: true,
              severity: "error",
              message: error.response.data.message,
            }),
          );
        });
    };
  }
}

export default new AuthService();
