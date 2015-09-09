var Board = require('../src/js/Board');
var expect = chai.expect;

describe('Board', function() {
    describe('constructor', function() {
        it ('should have access to a Board', function() {
            expect(Board).to.exist;
        });

        it ('should be able to instantiate a new Board', function() {
            var board = new Board();
            expect(board).to.exist;
        })
    });

    describe('methods', function() {
        var board;
        var mainDom;
        var boardDom;

        before(function() {
            var main = document.createElement('div');
            main.id = 'main';
            var canvas = document.createElement('canvas');
            canvas.id = 'board';
            main.appendChild(canvas);
            document.body.appendChild(main);

            mainDom = document.getElementById('main');
            boardDom = document.getElementById('board');

            board = new Board(mainDom, boardDom);
        });

        after(function() {
            if (mainDom) {
                document.body.removeChild(mainDom);
            }
        });

        it ('should get the canvas context', function() {
            var context = board.getContext();
            expect(context).to.exist;
        });

        it ('should be able to get canvas size', function() {
            var size = board.getSize();
            expect(size).to.exist;
            expect(size).to.be.above(50);
        });

    })
});