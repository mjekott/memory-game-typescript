import { Card } from './Card';
import { Deckable, Deck } from './Deck';

export class CreateEmptyDeck implements Deckable {
  deck: Card[] = [];

  load(): void {
    this.deck = [];
  }
}
