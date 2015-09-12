var Reversi = require('../src/js/Reversi');
var expect = chai.expect;

describe('Reversi', function() {
    it ('should be able to instantiate a new Reversi', function() {
        var game = new Reversi();
        expect(game).to.exist;
        expect(game.getContext()).to.not.exist;
    });

});

