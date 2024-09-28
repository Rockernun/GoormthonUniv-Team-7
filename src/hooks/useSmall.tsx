import { SmalltalkResponse } from 'types/SmalltalkResponse';
import { defaultAxios } from '../axios/defaultAxios'; // 상대 경로로 수정

export const getSmalltalks = async (): Promise<SmalltalkResponse> => {
  const response = await defaultAxios.get<SmalltalkResponse>(`/api/v1/talk_subject`);
  return response.data;
};
