import axios, { HttpStatusCode } from 'axios';
import keycloak from '../keycloak';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8080',
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (keycloak.token) {
      config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await keycloak.updateToken(5);
        originalRequest.headers.Authorization = `Bearer ${keycloak.token}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error('Token refresh failed', err);
        await keycloak.logout();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
