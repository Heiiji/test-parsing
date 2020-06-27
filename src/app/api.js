let axios = require("axios");

let API = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    Pragma: "no-cache"
  }
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
