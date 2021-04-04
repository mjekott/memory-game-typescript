"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var CreateDoubleDeckFromTwoArrays_1 = require("./CreateDoubleDeckFromTwoArrays");
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
    Deck.CreateDoubleDeckFromArray = function () {
        return new Deck(new CreateDoubleDeckFromTwoArrays_1.CreateDoubleDeckFromTwoArrays());
    };
    Deck.prototype.addToDeck = function (value) {
        this.deck.push(value);
    };
    Deck.prototype.removeFromDeck = function (value) {
        var index = this.deck.indexOf(value);
        this.deck.splice(index, 1);
    };
    return Deck;
}());
exports.Deck = Deck;
