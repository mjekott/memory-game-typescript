import { IDeck } from './Interface';
import { Card, Shape, Color } from './Model';

export class CreateDeck implements IDeck {
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
      this.deck.push(
        new Card(
          new Shape(this.shape[start]),
          new Color(this.color[innerStart])
        )
      );
      innerStart++;
    }

    this.deck = this.deck.concat(this.deck);
  }
}

export class CreateEmptyDeck implements IDeck {
  deck: Card[] = [];

  load(): void {
    this.deck = [];
  }
}
