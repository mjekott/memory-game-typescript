import { Card } from '../models/Card';
import { Deckable, Deck } from '../models/Deck';

export class CreateEmptyDeck implements Deckable {
  deck: Card[] = [];

  load(): void {
    this.deck = [];
  }
}
