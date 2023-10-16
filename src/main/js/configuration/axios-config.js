import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:9090",
});

// axiosInstance.interceptors.request.use((config) => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user.token) {
//     config.headers.Authorization = `Bearer ${user.token}`;
//   }

//   return config;
// });

export default axiosInstance;
