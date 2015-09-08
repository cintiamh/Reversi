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
        var instance;
        before(function() {
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            instance = document.getElementsByTagName('canvas')[0];
            board = new Board(instance);
        });

        after(function() {
            if (instance) {
                document.body.removeChild(instance);
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