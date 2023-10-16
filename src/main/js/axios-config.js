import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:9090",
  // baseURL: "http://localhost:9090", // process.env.REACT_APP_BASE_URL || "http://localhost:9090",
});

console.log("process.env.REACT_APP_BASE_URL: ", process.env.REACT_APP_BASE_URL);

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default axiosInstance;
