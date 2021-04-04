"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeckFromTwoArrays = void 0;
var Card_1 = require("../models/Card");
var CreateDeckFromTwoArrays = /** @class */ (function () {
    function CreateDeckFromTwoArrays() {
        this.deck = [];
        this.shape = ['Triangle', 'Square', 'Circle', 'Star'];
        this.color = ['Orange', 'Green', 'Blue', 'Yellow'];
    }
    CreateDeckFromTwoArrays.prototype.load = function () {
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
            this.deck.push(new Card_1.Card(this.shape[start], this.color[innerStart]));
            innerStart++;
        }
        this.deck = this.deck.concat(this.deck);
    };
    return CreateDeckFromTwoArrays;
}());
exports.CreateDeckFromTwoArrays = CreateDeckFromTwoArrays;
