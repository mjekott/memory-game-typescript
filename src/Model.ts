import { IDeck, ICard } from './Interface';
import { CreateDeck } from './CreateDeck';

export class Card {
  constructor(public shape: string, public value: string) {}

  static match(card1: Card, card2: Card) {
    if (!card1 || !card2) {
      return false;
    }
    if (card1.shape === card2.shape && card1.shape === card2.shape) {
      return true;
    }
    return false;
  }
}

export class Deck {
  deck: Card[] = [];
  get length(): number {
    return this.deck.length;
  }

  constructor(public reader: IDeck) {
    this.reader.load();
    this.deck = this.reader.deck;
  }

  static BuildDeck(): Deck {
    return new Deck(new CreateDeck());
  }

  addToDeck(value: Card): void {
    this.deck.push(value);
  }
  removeFromDeck(value: Card): void {
    const index = this.deck.indexOf(value);
    this.deck.splice(index, 1);
  }

  static shuffleDeck(deck: Card[]): void {
    deck.forEach((value) => {
      const index = deck.indexOf(value);
      const newIndex = Math.floor(Math.random() * deck.length);
      [deck[index], deck[newIndex]] = [deck[newIndex], deck[index]];
    });
  }
}

export class Player {
  score: number = 0;
  static BuildPlayer(name: string): Player {
    return new Player(name);
  }
  constructor(public name: string) {}

  play(data: Deck): void {
    const arr = [...data.deck];
    let first = Math.floor(Math.random() * arr.length);
    let value = arr[first];
    arr.splice(first, 1);
    let second = Math.floor(Math.random() * arr.length);
    let value2 = arr[second];
    arr.splice(second, 1);
    if (Card.match(value, value2)) {
      console.log(`${this.name}` + 'makes a match');
      data.removeFromDeck(value);
      data.removeFromDeck(value2);
      this.score++;
    }
  }
  displayStats(): void {
    console.log(this.name.toLowerCase() + ' Scores: ' + this.score);
    return;
  }
}

export class Game {
  round: number = 0;
  winner: string = '';

  constructor(
    public player1: Player,
    public player2: Player,
    public deck: Deck
  ) {}

  static BuildGame(player1Name: string, player2Name: string): Game {
    let player1 = Player.BuildPlayer(player1Name);
    let player2 = Player.BuildPlayer(player2Name);
    let deck = Deck.BuildDeck();
    return new Game(player1, player2, deck);
  }

  start(): void {
    Deck.shuffleDeck(this.deck.deck);
    console.log('Game Starts');

    while (this.deck.length > 0) {
      this.player1.play(this.deck);
      this.player2.play(this.deck);

      ++this.round;
    }
    console.log('Game Ends');
    this.checkWinner();
    this.displayWinner();
  }

  displayWinner() {
    console.log('\nTotal Rounds:' + this.round);
    this.player1.displayStats();
    this.player2.displayStats();
    console.log('Winner :' + this.winner);
  }
  checkWinner(): void {
    this.player1.score > this.player2.score
      ? (this.winner = this.player1.name)
      : this.player1.score == this.player2.score
      ? (this.winner = 'Draw')
      : (this.winner = this.player2.name);
  }
}
