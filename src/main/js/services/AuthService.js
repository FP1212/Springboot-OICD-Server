import axios from "AxiosInstance";
import API_ROUTES from "Constants/apiRoutes.js";
import { signin, signout } from "Redux/components/login/loginSlice";
import history from "Core/history";

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
            throw new Exception("Null Token");
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
          { username: user.username },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .finally(() => {
          localStorage.removeItem("user");
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
          history.push(Routes.SIGNIN);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }
}

export default new AuthService();
