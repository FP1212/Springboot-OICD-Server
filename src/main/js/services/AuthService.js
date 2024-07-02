import axios from '../configuration/axios-config.js';
import API_ROUTES from '../constants/apiRoutes.js';
import ROUTES from '../constants/routes.json';
import {
  signin as signInSlice,
  signout as signOutSlice,
} from '../redux/components/login/loginSlice';
import history from 'Core/history';
import { HttpStatusCode } from 'axios';
import { show } from '../redux/components/globalAlert/globalAlert';
import responseStatus from '../constants/responseStatus.json';

/**
 * Auth Service
 */
const AuthService = Object.freeze({
  /**
   * SingIn method
   *
   * @param {*} { username, password, rememberMe }
   * @return {*}
   * @memberof AuthService
   */
  signin: function ({ username, password, rememberMe, setLoading }) {
    return (dispatch) => {
      setLoading(true);
      axios
        .post(
          API_ROUTES.SIGNIN,
          {
            username,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(({ data }) => {
          if (data.status === responseStatus.SUCCESS && data.token) {
            if (rememberMe) {
              localStorage.setItem('user', JSON.stringify(data));
            } else {
              sessionStorage.setItem('user', JSON.stringify(data));
            }

            dispatch(
              signInSlice({
                user: data,
              }),
            );
          } else {
            dispatch(signOutSlice(data));
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(
            show({
              open: true,
              severity: 'warning',
              message: error?.response ? error.response.data?.message : 'default.server.error',
            }),
          );
        })
        .finally(() => setLoading(false));
    };
  },

  /**
   * SingOut Method
   *
   * @return {*}
   * @memberof AuthService
   */
  signout: function () {
    return (dispatch) => {
      const user = JSON.parse(
        sessionStorage.getItem('user')
          ? sessionStorage.getItem('user')
          : localStorage.getItem('user'),
      );

      axios
        .post(
          API_ROUTES.SIGNOUT,
          { userId: user.id },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .finally(() => {
          dispatch(signOutSlice());
        });
    };
  },

  /**
   * SignUp Method
   *
   * @param {*} data
   * @return {*}
   * @memberof AuthService
   */
  signup: function (data) {
    return (dispatch) => {
      axios
        .post(API_ROUTES.SIGNUP, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(({ data, httpStatus }) => {
          if (httpStatus === HttpStatusCode.Created) {
            history.push(ROUTES.SIGNIN);
          } else {
            dispatch(show({ open: true, severity: 'error', message: data.message }));
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(
            show({
              open: true,
              severity: 'error',
              message: error.response.data.message,
            }),
          );
        });
    };
  },
});

export const { signin, signout, signup } = AuthService;
