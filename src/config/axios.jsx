import axios from "axios";
import store from "../store";
export const baseURL ="http://localhost:5000";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

const ResponseInterceptor = (response) => {
  return response;
};


const RequestInterceptor = (config) => {

  const {auth}=store.getState()


  if (auth?.user?.token) {
    config.headers['x-access-token'] = auth.user.token;
  }

  return config;
};

axiosInstance.interceptors.request.use(RequestInterceptor);
axiosInstance.interceptors.response.use(ResponseInterceptor, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 509;
  if (!expectedErrors) {
    return Promise.reject(error.response);
  } else {
    return Promise.reject(error.response);
  }
});
