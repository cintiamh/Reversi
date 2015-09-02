var Reversi = require('../src/js/Reversi');
var expect = chai.expect;

describe('Reversi', function() {
    it ('should be able to instantiate a new Reversi', function() {
        var game = new Reversi();
        expect(game).to.exist;
        expect(game.getContext()).to.not.exist;
    });

    it ('should be able to set context with canvas', function() {
        var canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        var instance = document.getElementsByTagName('canvas')[0];
        var game = new Reversi(instance);
        expect(game).to.exist;
        console.log(game.getContext());
        expect(game.getContext()).to.exist;
    });
});

