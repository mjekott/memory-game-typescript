"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmptyDeck = exports.CreateDeck = void 0;
var Model_1 = require("./Model");
var CreateDeck = /** @class */ (function () {
    function CreateDeck() {
        this.deck = [];
        this.shape = ['Triangle', 'Square', 'Circle', 'Star'];
        this.color = ['Orange', 'Green', 'Blue', 'Yellow'];
    }
    CreateDeck.prototype.load = function () {
        var start = 0;
        var end = this.shape.length - 1;
        var innerStart = 0;
        var innerEnd = this.color.length - 1;
        while (start <= end) {
            if (innerStart > innerEnd) {
                start++;
                innerStart = 0;
            }
            if (start > end) {
                break;
            }
            this.deck.push(new Model_1.Card(this.shape[start], this.color[innerStart]));
            innerStart++;
        }
        this.deck = this.deck.concat(this.deck);
    };
    return CreateDeck;
}());
exports.CreateDeck = CreateDeck;
var CreateEmptyDeck = /** @class */ (function () {
    function CreateEmptyDeck() {
        this.deck = [];
    }
    CreateEmptyDeck.prototype.load = function () {
        this.deck = [];
    };
    return CreateEmptyDeck;
}());
exports.CreateEmptyDeck = CreateEmptyDeck;
