var Piece = function(context, posX, posY, color) {
    this.config = {
        context: context ? context : null,
        posX: posX ? posX : 0,
        posY: posY ? posY : 0,
        color: color ? color : 'black'
    };
    console.log('Piece', this.config);
};

Piece.prototype = {

};

module.exports = Piece;