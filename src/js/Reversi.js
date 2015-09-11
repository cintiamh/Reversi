var Board = require('./Board');
var Piece = require('./Piece');

var canvasEl;
var context;
var canvasSize;

function Reversi(parent, canvas) {
    var board = new Board(parent, canvas);
    var context = board.getContext();
    var part = board.getPart();
    //var piece = new Piece(context, 3, 2, '#ffffff', part);
}

Reversi.prototype = {
    getContext: function() {
        return context;
    },

    getCanvasSize: function() {
        if (canvasEl && canvasEl.offsetWidth) {
            canvasSize = canvasEl.offsetWidth;
        }
        else {
            canvasSize = 800;
        }
        return canvasSize;
    },

    drawBoard: function() {
        var space = Math.floor(canvasSize / 8);
        console.log(canvasSize, space);
    }
};

module.exports = Reversi;