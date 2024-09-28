import { defaultAxios } from '../axios/defaultAxios'; // 상대 경로로 수정
import { MinigameResponse } from 'types/MinigameResponse.type';

export const getMinigames = async (): Promise<MinigameResponse> => {
  const response = await defaultAxios.get<MinigameResponse>(`/api/v1/mini-game/`);
  return response.data;
};
