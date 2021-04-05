"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Player = exports.Deck = exports.Card = void 0;
var CreateDeck_1 = require("./CreateDeck");
var Card = /** @class */ (function () {
    function Card(shape, value) {
        this.shape = shape;
        this.value = value;
    }
    Card.match = function (card1, card2) {
        if (!card1 || !card2) {
            return false;
        }
        if (card1.shape === card2.shape && card1.shape === card2.shape) {
            return true;
        }
        return false;
    };
    return Card;
}());
exports.Card = Card;
var Deck = /** @class */ (function () {
    function Deck(reader) {
        this.reader = reader;
        this.deck = [];
        this.reader.load();
        this.deck = this.reader.deck;
    }
    Object.defineProperty(Deck.prototype, "length", {
        get: function () {
            return this.deck.length;
        },
        enumerable: false,
        configurable: true
    });
    Deck.BuildDeck = function () {
        return new Deck(new CreateDeck_1.CreateDeck());
    };
    Deck.prototype.addToDeck = function (value) {
        this.deck.push(value);
    };
    Deck.prototype.removeFromDeck = function (value) {
        var index = this.deck.indexOf(value);
        this.deck.splice(index, 1);
    };
    Deck.shuffleDeck = function (deck) {
        deck.forEach(function (value) {
            var _a;
            var index = deck.indexOf(value);
            var newIndex = Math.floor(Math.random() * deck.length);
            _a = [deck[newIndex], deck[index]], deck[index] = _a[0], deck[newIndex] = _a[1];
        });
    };
    return Deck;
}());
exports.Deck = Deck;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.score = 0;
    }
    Player.BuildPlayer = function (name) {
        return new Player(name);
    };
    Player.prototype.play = function (data) {
        var arr = __spreadArray([], data.deck);
        var first = Math.floor(Math.random() * arr.length);
        var value = arr[first];
        arr.splice(first, 1);
        var second = Math.floor(Math.random() * arr.length);
        var value2 = arr[second];
        arr.splice(second, 1);
        if (Card.match(value, value2)) {
            console.log("" + this.name + 'makes a match');
            data.removeFromDeck(value);
            data.removeFromDeck(value2);
            this.score++;
        }
    };
    Player.prototype.displayStats = function () {
        console.log(this.name.toLowerCase() + ' Scores: ' + this.score);
        return;
    };
    return Player;
}());
exports.Player = Player;
var Game = /** @class */ (function () {
    function Game(player1, player2, deck) {
        this.player1 = player1;
        this.player2 = player2;
        this.deck = deck;
        this.round = 0;
        this.winner = '';
    }
    Game.BuildGame = function (player1Name, player2Name) {
        var player1 = Player.BuildPlayer(player1Name);
        var player2 = Player.BuildPlayer(player2Name);
        var deck = Deck.BuildDeck();
        return new Game(player1, player2, deck);
    };
    Game.prototype.start = function () {
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
    };
    Game.prototype.displayWinner = function () {
        console.log('\nTotal Rounds:' + this.round);
        this.player1.displayStats();
        this.player2.displayStats();
        console.log('Winner :' + this.winner);
    };
    Game.prototype.checkWinner = function () {
        this.player1.score > this.player2.score
            ? (this.winner = this.player1.name)
            : this.player1.score == this.player2.score
                ? (this.winner = 'Draw')
                : (this.winner = this.player2.name);
    };
    return Game;
}());
exports.Game = Game;
