import { getUserFromLocalStorage } from "@utils/main";
import { fireToastError } from "@utils/toaster";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create();

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

axiosInstance.interceptors.request.use((config) => {
  config.withCredentials = false;
  config.baseURL = baseUrl;

  // Set Authorization header if token exists
  const userData = getUserFromLocalStorage();
  if (userData?.token) {
    config.headers["Authorization"] = `Bearer ${userData.token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      fireToastError("Token expired/Unauthorized");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
