var Reversi = require('./Reversi');
var Board = require('./Board');

var canvas = document.getElementById('board');

var game = new Reversi();
var board = new Board(canvas);
console.log("BOARD", board);
board.getSize();
