"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./Model");
//create a new game insatnce and initialize deck using a double deck
var game = Model_1.Game.BuildGame('john', 'smith');
//start Game;
game.start();
