function draw(context, posX, posY, part, color) {
    var path = new Path2D();
    var radius = Math.floor((part * 0.8) * 0.5);
    var x = (posX * part) + (part / 2);
    var y = (posY * part) + (part / 2);

    path.arc(x, y, radius, 0, Math.PI * 2, false);

    if (context) {
        context.fillStyle = color;
        context.fill(path);
    }
}

var Piece = function(context, posX, posY, color, part) {
    this.config = {
        context: context ? context : null,
        posX: posX ? posX : 0,
        posY: posY ? posY : 0,
        color: color ? color : '#000000',
        part: part ? part : 0
    };

    var config = this.config;

    draw(config.context, config.posX, config.posY, config.part, config.color);
};

Piece.prototype = {
    getPosition: function() {
        return {
            x: this.config.posX,
            y: this.config.posY
        }
    },

    getColor: function() {
        return this.config.color;
    }
};

module.exports = Piece;