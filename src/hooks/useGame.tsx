import axios from 'axios';
import { MinigameResponse } from 'types/MinigameResponse.type';

export const getMinigames = async (): Promise<MinigameResponse> => {
  const response = await axios.get<MinigameResponse>(`/api/v1/mini-game`);
  return response.data;
};
