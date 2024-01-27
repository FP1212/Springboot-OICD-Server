import axios from "axios";
import API_ROUTES from "Constants/apiRoutes.js";
import store from "Redux/store/store";
import { signout } from "../redux/components/login/loginSlice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
});

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(
    !!sessionStorage.getItem("user")
      ? sessionStorage.getItem("user")
      : localStorage.getItem("user"),
  );
  config.headers.Authorization =
    user && user.token ? `Bearer ${user.token}` : "";

  return config;
});

const refreshAccessToken = () => {
  const user = JSON.parse(
    !!sessionStorage.getItem("user")
      ? sessionStorage.getItem("user")
      : localStorage.getItem("user"),
  );

  if (user && user.refreshToken) {
    return axios
      .post(API_ROUTES.REFRESH_TOKEN, {
        refreshToken: user.refreshToken,
      })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  } else {
    return Promise.reject(new Error("Refresh Token Not Found"));
  }
};

// Variable para rastrear si ya se está refrescando el token para evitar ciclos infinitos
let isRefreshing = false;
let refreshSubscribers = [];

// Interceptor para capturar errores de respuesta
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // Verificar si el error es un error 401 (no autorizado)
    if (error.response.status === 401) {
      // Si ya se está refrescando el token, espera y reintenta la solicitud
      if (isRefreshing) {
        return new Promise(function (resolve) {
          refreshSubscribers.push(function (token) {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            resolve(axios(originalRequest));
          });
        });
      }

      // Marcar que se está refrescando el token
      isRefreshing = true;

      // Realizar la solicitud para refrescar el token
      return refreshAccessToken()
        .then((data) => {
          const user = JSON.parse(
            !!sessionStorage.getItem("user")
              ? sessionStorage.getItem("user")
              : localStorage.getItem("user"),
          );

          user.token = data.accessToken;
          user.refreshToken = data.refreshToken;

          if (sessionStorage.getItem("user") !== null) {
            sessionStorage.setItem("user", JSON.stringify(user));
          }

          if (localStorage.getItem("user") !== null) {
            localStorage.setItem("user", JSON.stringify(user));
          }

          // Actualizar el token en las cabeceras de Axios
          axiosInstance.defaults.headers.common["Authorization"] =
            `Bearer ${data.accessToken}`;
          originalRequest.headers["Authorization"] =
            `Bearer ${data.accessToken}`;

          // Reintentar la solicitud original que falló
          return axiosInstance(originalRequest);
        })
        .catch((refreshError) => {
          store.dispatch(signout());
          return Promise.reject(refreshError);
        })
        .finally(() => {
          isRefreshing = false;
          refreshSubscribers = [];
        });
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
