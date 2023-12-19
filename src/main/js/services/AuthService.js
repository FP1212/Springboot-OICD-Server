import axios from "AxiosInstance";
import API_ROUTES from "Constants/apiRoutes.js";
import { signin, signout } from "Redux/components/login/loginSlice";
import history from "Core/history";
import {HttpStatusCode} from "axios";
import {show} from "../redux/components/globalAlert/globalAlert";

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
            throw new Error("Null Token");
          }
        })
        .catch((error) => {
          dispatch(signout());
          console.error(error);
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
          }
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
            history.push(API_ROUTES.SIGNIN);
          } else {
            dispatch(show({open: true, severity: "error", message: data.message }))
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(show({open: true, severity: "info", message: error.message }))
        });
    };
  }
}

export default new AuthService();
