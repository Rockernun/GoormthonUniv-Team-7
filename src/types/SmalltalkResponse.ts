import { Smalltalk } from './Smalltalk.type';

export interface SmalltalkResponse {
  talk_subjects: Smalltalk[];
  status: number;
  message: string;
}
