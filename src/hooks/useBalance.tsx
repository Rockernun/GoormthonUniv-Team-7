import { defaultAxios } from '../axios/defaultAxios'; // 상대 경로로 수정
import { BalancegameResponse } from 'types/BalancegameResponse';

export const getBalancegames = async (): Promise<BalancegameResponse> => {
  const response = await defaultAxios.get<BalancegameResponse>(`/api/v1/balance-game`);
  return response.data;
};
