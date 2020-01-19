import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Hero } from 'types/Hero/Hero';

export const HeroService = {
  getAll: async (apiKey: string): Promise<Hero[]> => {
    const requestConfig: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.steampowered.com/IEconDOTA2_205790/GetHeroes/v1/?key=${apiKey}`,
    };

    return axios
      .request(requestConfig)
      .catch((response: AxiosError) => Promise.reject(response.response?.data))
      .then((response: AxiosResponse) => response.data.result);
  },
};
