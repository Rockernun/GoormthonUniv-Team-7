import axios, { AxiosInstance } from 'axios';

interface DefaultConfigure {
  baseURL: string | undefined;
}

const defaultConfigure: DefaultConfigure = {
  baseURL: process.env.REACT_APP_API_SERVER_URL,
};

// Axios 설정
axios.defaults.withCredentials = true;

// Axios 인스턴스 생성
const defaultAxios: AxiosInstance = axios.create(defaultConfigure);

// defaultAxios 내보내기
export { defaultAxios };
