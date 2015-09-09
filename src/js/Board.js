var context;

var Board = function(canvas) {

    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
    }

    this.draw();
};

Board.prototype = {

    getCanvas: function() {
        return context ? context.canvas : null;
    },

    getContext: function() {
        return context;
    },

    setHeight: function() {
        var canvas = context ? context.canvas : null;
        var size;

        if (canvas && canvas.offsetWidth) {
            size = canvas.offsetWidth;
            canvas.width = size;
            canvas.height = size;
        }
        return size;
    },

    drawLine: function(start, end) {
        var line;
        if (context && context.stroke && start && end) {
            line = new Path2D();
            line.moveTo(start.x, start.y);
            line.lineTo(end.x, end.y);
            context.stroke(line);
        }
        return line;
    },

    draw: function() {
        var size = this.setHeight();
        if (size) {
            context.fillStyle = "#000000";
            context.lineWidth = "1px";
            var part = Math.ceil(size / 8);
            this.drawLine({x:100, y:0}, {x:100, y:800});
            for (var i = 0; i <= 8; i++) {
                // Horizontal Lines
                this.drawLine({x: 0, y: part * i}, {x: size, y: part * i});
                // Vertical Lines
                this.drawLine({x: part * i, y: 0}, {x: part * i, y: size});
            }
            return true;
        }
        return false;
    }

};

module.exports = Board;