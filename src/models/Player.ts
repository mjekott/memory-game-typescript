import { Deck } from './Deck';
import { CreateEmptyDeck } from '../createDeck/CreateEmptyDeck';
import { Card } from './Card';
import { match } from '../utils';

export class Player {
  static CreatePlayer(name: string): Player {
    return new Player(name, new Deck(new CreateEmptyDeck()));
  }
  constructor(public name: string, public deck: Deck) {}

  handlePick(data: Deck): void {
    const arr = [...data.deck];
    let first = Math.floor(Math.random() * arr.length);
    let value = arr[first];
    arr.splice(first, 1);
    let second = Math.floor(Math.random() * arr.length);
    let value2 = arr[second];
    arr.splice(second, 1);
    if (match(value, value2)) {
      console.log(`${this.name}` + 'makes a match');
      this.deck.addToDeck(value);
      data.removeFromDeck(value);
      this.deck.addToDeck(value2);
      data.removeFromDeck(value2);
      console.log(data.deck.length);
    }
  }
  displayStats(): void {
    console.log(this.name.toLowerCase() + ' Scores: ' + this.deck.length / 2);
    return;
  }
}
