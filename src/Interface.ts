import { Card } from './Model';
export interface IDeck {
  deck: Card[];
  load(): void;
}

export interface ICard {
  shape: string;
  value: string;
}
