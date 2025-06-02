import { axiosInstance } from "src/http/interceptor";

export const registerUser = ({
  userName,
  email,
  password,
}: {
  userName: string;
  email: string;
  password: string;
}) => {
  return axiosInstance.post(`/api/v1/register`, {
    userName,
    email,
    password,
  });
};

export const loginUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axiosInstance.post(`/api/v1/login`, {
    email,
    password,
  });
};
