var Board = require('./Board');
var Piece = require('./Piece');

function Reversi(parent, canvas) {
    // Prevent the screen to move on touch.
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);

    this.canvas = canvas;
    this.parent = parent;
    this.board = new Board(parent, canvas);
    this.context = this.board.getContext();
    this.part = this.board.getPart();
    this.pieces = [];

    this.startGame();
}

Reversi.prototype = {
    startGame: function() {
        this.pieces = [];
        // create the initial pieces in center.
        this.player1(4, 3);
        this.player1(3, 4);
        this.player2(3, 3);
        this.player2(4, 4);

        var redraw = this.redrawAll;
        var board = this.board;
        var pieces = this.pieces;

        window.addEventListener('resize', function() {
            redraw(board, pieces);
        }, false);
        window.addEventListener('orientationchange', function() {
            redraw(board, pieces);
        }, false);
    },

    createPiece: function(x, y, color) {
        this.pieces.push(new Piece(this.context, x, y, color, this.part));
    },

    player1: function(x, y) {
        this.createPiece(x, y, '#000000');
    },

    player2: function(x, y) {
        this.createPiece(x, y, '#FFFFFF');
    },

    redrawAll: function(board, pieces) {
        var part;

        if (board && board.redraw) {
            board.redraw();
            part = board.getPart();
        }
        pieces.map(function(piece) {
            if (piece && piece.redraw) {
                piece.redraw(part);
            }
        });
    }

};

module.exports = Reversi;