import { Hero } from 'types/Hero/Hero';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { axios } from 'services/fetch';

export const HeroService = {
  getAll: async (): Promise<Hero[]> => {
    const requestConfig: AxiosRequestConfig = {
      method: 'get',
      url: `IEconDOTA2_205790/GetHeroes/v1`,
    };

    return axios
      .request(requestConfig)
      .catch((response: AxiosError) => Promise.reject(response.response?.data))
      .then((response: AxiosResponse) => response.data.result.heroes);
  },
};
