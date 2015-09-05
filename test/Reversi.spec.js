var Reversi = require('../src/js/Reversi');
var expect = chai.expect;

describe('Reversi', function() {
    it ('should be able to instantiate a new Reversi', function() {
        var game = new Reversi();
        expect(game).to.exist;
        expect(game.getContext()).to.not.exist;
    });

    //it ('should be able to set context with canvas', function() {
    //    var canvas = document.createElement('canvas');
    //    document.body.appendChild(canvas);
    //    var instance = document.getElementsByTagName('canvas')[0];
    //    var game = new Reversi(instance);
    //    expect(game).to.exist;
    //    var ctx = game.getContext();
    //    expect(ctx).to.exist;
    //});
    //
    //it('should get the canvas size', function() {
    //    var canvas = document.createElement('canvas');
    //    document.body.appendChild(canvas);
    //    var instance = document.getElementsByTagName('canvas')[0];
    //    var game = new Reversi(instance);
    //    var size = game.getCanvasSize();
    //    expect(size).to.be.at.least(100);
    //});
    //
    //it('should draw the board', function() {
    //
    //});
});

