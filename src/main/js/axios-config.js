import axios from "axios";
import {excludeAPISignup} from "./constants/apiRoutes";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
  // baseURL: "http://localhost:8080", // process.env.REACT_APP_BASE_URL || "http://localhost:8080",
});

console.log("process.env.REACT_APP_BASE_URL: ", process.env.REACT_APP_BASE_URL);

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token && config.url !== (excludeAPISignup)) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default axiosInstance;
