var Piece = require('../src/js/Piece');
var expect = chai.expect;

describe('Piece', function() {

    describe('constructor', function() {
        it ('should have access to a Piece', function() {
            expect(Piece).to.exist;
        });

        it ('should be able to instantiate a new Piece', function() {
            var piece = new Piece();
            expect(piece).to.exist;
        });
    });

});
