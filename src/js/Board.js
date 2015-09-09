function resize(config) {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    var size;

    if (newWidthToHeight > 1) {
        size = newHeight;
    }
    else {
        size = newWidth;
    }

    config.main.style.height = size + 'px';
    config.main.style.width = size + 'px';

    config.main.style.marginTop = (-size / 2) + 'px';
    config.main.style.marginLeft = (-size / 2) + 'px';

    config.canvas.width = size;
    config.canvas.height = size;

    draw(config.context, size);
    config.size = size;

    return size;
}

function draw(context, size) {
    context.fillStyle = "#000000";
    context.lineWidth = "1px";
    var part = Math.ceil(size / 8);
    drawLine({x:100, y:0}, {x:100, y:800});
    for (var i = 0; i <= 8; i++) {
        // Horizontal Lines
        drawLine(context, {x: 0, y: part * i}, {x: size, y: part * i});
        // Vertical Lines
        drawLine(context, {x: part * i, y: 0}, {x: part * i, y: size});
    }
    return true;
}

function drawLine(context, start, end) {
    var line;
    if (context && context.stroke && start && end) {
        line = new Path2D();
        line.moveTo(start.x, start.y);
        line.lineTo(end.x, end.y);
        context.stroke(line);
    }
    return line;
}

var Board = function(main, canvas) {
    this.config = {};
    var config = this.config;

    config.main = main;
    config.canvas = canvas;

    if (canvas && canvas.getContext) {
        config.context = canvas.getContext('2d');
        config.size = resize(config);
        window.addEventListener('resize', function() {
            config.size = resize(config);
        }, false);
        window.addEventListener('orientationchange', function() {
            config.size = resize(config);
        }, false);
    }
};

Board.prototype = {

    getCanvas: function() {
        return this.config.canvas;
    },

    getContext: function() {
        return this.config.context;
    },

    getSize: function() {
        return this.config.size;
    }
};

module.exports = Board;