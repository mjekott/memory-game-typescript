import { Card } from './Card';
import { CreateDoubleDeckFromTwoArrays } from './CreateDoubleDeckFromTwoArrays';

export interface Deckable {
  deck: Card[];
  load(): void;
}
export class Deck {
  deck: Card[] = [];
  get length(): number {
    return this.deck.length;
  }
  constructor(public reader: Deckable) {
    this.reader.load();
    this.deck = this.reader.deck;
  }

  static CreateDoubleDeckFromArray(): Deck {
    return new Deck(new CreateDoubleDeckFromTwoArrays());
  }

  addToDeck(value: Card): void {
    this.deck.push(value);
  }
  removeFromDeck(value: Card): void {
    const index = this.deck.indexOf(value);
    this.deck.splice(index, 1);
  }
}
