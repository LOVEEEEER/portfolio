import axios, { AxiosRequestConfig } from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndPoint;

axios.interceptors.request.use(
  async function (config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    const containSlash = /\/$/gi.test(String(config.url));
    config.url =
      (containSlash ? String(config.url).slice(0, -1) : config.url) + ".json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default httpService;
