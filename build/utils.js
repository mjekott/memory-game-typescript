"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleAny = exports.match = void 0;
function match(first, second) {
    if (!first || !second) {
        return false;
    }
    if (first.name === second.name && first.value === second.value) {
        return true;
    }
    return false;
}
exports.match = match;
function shuffleAny(arr) {
    var deck = arr;
    deck.forEach(function (value) {
        var _a;
        var index = deck.indexOf(value);
        var newIndex = Math.floor(Math.random() * deck.length);
        _a = [deck[newIndex], deck[index]], deck[index] = _a[0], deck[newIndex] = _a[1];
    });
}
exports.shuffleAny = shuffleAny;
