import { Deck } from './Deck';
import { Player } from './Player';
import { shuffleAny } from '../utils';
import { Card } from './Card';

export class Game {
  round: number = 0;
  winner: string = '';

  constructor(
    public player1: Player,
    public player2: Player,
    public deck: Deck
  ) {}

  static CreateNewGameUsingDoubleDeck(
    player1Name: string,
    player2Name: string
  ): Game {
    let player1 = Player.CreatePlayer(player1Name);
    let player2 = Player.CreatePlayer(player2Name);
    let deck = Deck.CreateDoubleDeckFromArray();
    return new Game(player1, player2, deck);
  }

  start(): void {
    shuffleAny<Card>(this.deck.deck);
    console.log('Game Starts');

    while (this.deck.length > 0) {
      this.player1.handlePick(this.deck);
      this.player2.handlePick(this.deck);

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
    this.player1.deck.length > this.player2.deck.length
      ? (this.winner = this.player1.name)
      : this.player1.deck.length == this.player2.deck.length
      ? (this.winner = 'Draw')
      : (this.winner = this.player2.name);
  }
}
