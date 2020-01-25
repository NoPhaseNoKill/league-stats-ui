import baseAxios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const addResponseInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    },
  );
};

const addHeaderInterceptor = (axios: AxiosInstance, url: string) => {
  addResponseInterceptor(axios);
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const extensionUrl = config?.url?.replace(/^\//, '') ?? '';
    return {
      ...config,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...config.headers,
      },
      url: url + extensionUrl,
    };
  });
};

const addInterceptor = (axios: AxiosInstance) => {
  addHeaderInterceptor(axios, 'http://localhost:3001/');
  return axios;
};

export const axios = addInterceptor(
  baseAxios.create({
    timeout: 3000,
  }),
);
