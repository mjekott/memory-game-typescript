"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Deck_1 = require("./Deck");
var Player_1 = require("./Player");
var utils_1 = require("./utils");
var Game = /** @class */ (function () {
    function Game(player1, player2, deck) {
        this.player1 = player1;
        this.player2 = player2;
        this.deck = deck;
        this.round = 0;
        this.winner = '';
    }
    Game.CreateNewGameUsingDoubleDeck = function (player1Name, player2Name) {
        var player1 = Player_1.Player.CreatePlayer(player1Name);
        var player2 = Player_1.Player.CreatePlayer(player2Name);
        var deck = Deck_1.Deck.CreateDoubleDeckFromArray();
        return new Game(player1, player2, deck);
    };
    Game.prototype.start = function () {
        utils_1.shuffleAny(this.deck.deck);
        console.log('Game Starts');
        while (this.deck.length > 0) {
            this.player1.handlePick(this.deck);
            this.player2.handlePick(this.deck);
            ++this.round;
        }
        console.log('Game Ends');
        this.checkWinner();
        this.displayWinner();
    };
    Game.prototype.displayWinner = function () {
        console.log('\nTotal Rounds:' + this.round);
        this.player1.displayStats();
        this.player2.displayStats();
        console.log('Winner :' + this.winner);
    };
    Game.prototype.checkWinner = function () {
        this.player1.deck.length > this.player2.deck.length
            ? (this.winner = this.player1.name)
            : this.player1.deck.length == this.player2.deck.length
                ? (this.winner = 'Draw')
                : (this.winner = this.player2.name);
    };
    return Game;
}());
exports.Game = Game;
