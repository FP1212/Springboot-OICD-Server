import axios from "axios";
import API_ROUTES from "Constants/apiRoutes.js";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
});

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

// Función para refrescar el token (debes implementarla según tu lógica)
const refreshAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

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
          const user = JSON.parse(localStorage.getItem("user"));

          user.token = data.accessToken;
          user.refreshToken = data.refreshToken;

          localStorage.setItem("user", JSON.stringify(data));

          // Actualizar el token en las cabeceras de Axios
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;

          // Reintentar la solicitud original que falló
          return axiosInstance(originalRequest);
        })
        .catch((refreshError) => {
          return Promise.reject(refreshError);
        })
        .finally(() => {
          isRefreshing = false;
          refreshSubscribers = [];
        });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
