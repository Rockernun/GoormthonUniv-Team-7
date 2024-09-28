import { Minigame } from './Minigame.type';

export interface MinigameResponse {
  minigames: Minigame[];
  status: number;
  message: string;
}
