import { Card } from '../models/Card';
import { Deckable, Deck } from '../models/Deck';

export class CreateDoubleDeckFromTwoArrays implements Deckable {
  deck: Card[] = [];
  shape: string[] = ['Triangle', 'Square', 'Circle', 'Star'];
  color: string[] = ['Orange', 'Green', 'Blue', 'Yellow'];
  load(): void {
    let start = 0;
    let end = this.shape.length - 1;
    let innerStart = 0;
    let innerEnd = this.color.length - 1;

    while (start <= end) {
      if (innerStart > innerEnd) {
        start++;
        innerStart = 0;
      }
      if (start > end) {
        break;
      }
      this.deck.push(new Card(this.shape[start], this.color[innerStart]));
      innerStart++;
    }
    this.deck = this.deck.concat(this.deck);
  }
}
