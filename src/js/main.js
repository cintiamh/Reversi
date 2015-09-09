var Reversi = require('./Reversi');
var Board = require('./Board');

var gameArea = document.getElementById('main');
var canvas = document.getElementById('board');

var game = new Reversi();
var board = new Board(gameArea, canvas);
