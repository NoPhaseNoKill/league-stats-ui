import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { axios } from 'services/fetch';
import { Item } from 'types/Item/Item';

export const ItemService = {
  getAll: async (): Promise<Item[]> => {
    const requestConfig: AxiosRequestConfig = {
      method: 'get',
      url: `IEconDOTA2_570/GetGameItems/v1`,
    };

    return axios
      .request(requestConfig)
      .catch((response: AxiosError) => Promise.reject(response.response?.data))
      .then((response: AxiosResponse) => response.data.result.items);
  },
};
