import { Card } from './Model';
export interface IDeck {
  deck: Card[];
  load(): void;
}
