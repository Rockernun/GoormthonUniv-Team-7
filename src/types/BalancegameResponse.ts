import { Balancegame } from './Balancegame.type';

export interface BalancegameResponse {
  games: Balancegame[];
  status: number;
  message: string;
}
