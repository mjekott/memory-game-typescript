"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Deck_1 = require("./Deck");
var CreateEmptyDeck_1 = require("../createDeck/CreateEmptyDeck");
var utils_1 = require("../utils");
var Player = /** @class */ (function () {
    function Player(name, deck) {
        this.name = name;
        this.deck = deck;
    }
    Player.CreatePlayer = function (name) {
        return new Player(name, new Deck_1.Deck(new CreateEmptyDeck_1.CreateEmptyDeck()));
    };
    Player.prototype.handlePick = function (data) {
        var arr = __spreadArray([], data.deck);
        var first = Math.floor(Math.random() * arr.length);
        var value = arr[first];
        arr.splice(first, 1);
        var second = Math.floor(Math.random() * arr.length);
        var value2 = arr[second];
        arr.splice(second, 1);
        if (utils_1.match(value, value2)) {
            console.log("" + this.name + 'makes a match');
            this.deck.addToDeck(value);
            data.removeFromDeck(value);
            this.deck.addToDeck(value2);
            data.removeFromDeck(value2);
            console.log(data.deck.length);
        }
    };
    Player.prototype.displayStats = function () {
        console.log(this.name.toLowerCase() + ' Scores: ' + this.deck.length / 2);
        return;
    };
    return Player;
}());
exports.Player = Player;
