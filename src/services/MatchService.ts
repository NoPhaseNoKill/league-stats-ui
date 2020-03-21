import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { axios } from 'services/fetch';
import { Match } from 'types/Match/Match';

export const MatchService = {
  getById: async (matchId: string): Promise<Match> => {
    const requestConfig: AxiosRequestConfig = {
      method: 'get',
      url: `/lol/match/v4/matches/${matchId}`,
    };

    return axios
      .request(requestConfig)
      .catch((response: AxiosError) => Promise.reject(response.response?.data))
      .then((response: AxiosResponse) => response.data);
  },
};
