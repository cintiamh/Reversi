(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    var part = Math.floor(size / 8);
    size = part * 8;

    config.main.style.height = size + 'px';
    config.main.style.width = size + 'px';

    config.main.style.marginTop = (-size / 2) + 'px';
    config.main.style.marginLeft = (-size / 2) + 'px';

    config.canvas.width = size;
    config.canvas.height = size;

    draw(config.context, part, size);
    config.part = part;
    config.size = size;

    return size;
}

function draw(context, part, size) {
    context.fillStyle = "#000000";
    context.lineWidth = "1px";

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
    },

    getPart: function() {
        return this.config.part;
    }
};

module.exports = Board;
},{}],2:[function(require,module,exports){
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

    this.redraw();
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
    },

    redraw: function() {
        var config = this.config;
        draw(config.context, config.posX, config.posY, config.part, config.color);
    }
};

module.exports = Piece;
},{}],3:[function(require,module,exports){
var Board = require('./Board');
var Piece = require('./Piece');

function Reversi(parent, canvas) {
    // Prevent the screen to move on touch.
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);

    this.canvas = canvas;
    this.parent = parent;
    this.board = new Board(parent, canvas);
    this.context = this.board.getContext();
    this.part = this.board.getPart();
    this.pieces = [];

    this.startGame();


    //var piece = new Piece(context, 3, 2, '#ffffff', part);
}

Reversi.prototype = {
    startGame: function() {
        this.pieces = [];
        // create the initial pieces in center.
        this.player1(4, 3);
        this.player1(3, 4);
        this.player2(3, 3);
        this.player2(4, 4);
    },

    createPiece: function(x, y, color) {
        this.pieces.push(new Piece(this.context, x, y, color, this.part));
    },

    player1: function(x, y) {
        this.createPiece(x, y, '#000000');
    },

    player2: function(x, y) {
        this.createPiece(x, y, '#FFFFFF');
    }

};

module.exports = Reversi;
},{"./Board":1,"./Piece":2}],4:[function(require,module,exports){
var Reversi = require('./Reversi');
var Board = require('./Board');

var gameArea = document.getElementById('main');
var canvas = document.getElementById('board');

var game = new Reversi(gameArea, canvas);

},{"./Board":1,"./Reversi":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUGllY2UuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiByZXNpemUoY29uZmlnKSB7XG4gICAgdmFyIG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdmFyIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgbmV3V2lkdGhUb0hlaWdodCA9IG5ld1dpZHRoIC8gbmV3SGVpZ2h0O1xuICAgIHZhciBzaXplO1xuXG4gICAgaWYgKG5ld1dpZHRoVG9IZWlnaHQgPiAxKSB7XG4gICAgICAgIHNpemUgPSBuZXdIZWlnaHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaXplID0gbmV3V2lkdGg7XG4gICAgfVxuICAgIHZhciBwYXJ0ID0gTWF0aC5mbG9vcihzaXplIC8gOCk7XG4gICAgc2l6ZSA9IHBhcnQgKiA4O1xuXG4gICAgY29uZmlnLm1haW4uc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgY29uZmlnLm1haW4uc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcblxuICAgIGNvbmZpZy5tYWluLnN0eWxlLm1hcmdpblRvcCA9ICgtc2l6ZSAvIDIpICsgJ3B4JztcbiAgICBjb25maWcubWFpbi5zdHlsZS5tYXJnaW5MZWZ0ID0gKC1zaXplIC8gMikgKyAncHgnO1xuXG4gICAgY29uZmlnLmNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgY29uZmlnLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuXG4gICAgZHJhdyhjb25maWcuY29udGV4dCwgcGFydCwgc2l6ZSk7XG4gICAgY29uZmlnLnBhcnQgPSBwYXJ0O1xuICAgIGNvbmZpZy5zaXplID0gc2l6ZTtcblxuICAgIHJldHVybiBzaXplO1xufVxuXG5mdW5jdGlvbiBkcmF3KGNvbnRleHQsIHBhcnQsIHNpemUpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gXCIxcHhcIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAvLyBIb3Jpem9udGFsIExpbmVzXG4gICAgICAgIGRyYXdMaW5lKGNvbnRleHQsIHt4OiAwLCB5OiBwYXJ0ICogaX0sIHt4OiBzaXplLCB5OiBwYXJ0ICogaX0pO1xuICAgICAgICAvLyBWZXJ0aWNhbCBMaW5lc1xuICAgICAgICBkcmF3TGluZShjb250ZXh0LCB7eDogcGFydCAqIGksIHk6IDB9LCB7eDogcGFydCAqIGksIHk6IHNpemV9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5lKGNvbnRleHQsIHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgbGluZTtcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnN0cm9rZSAmJiBzdGFydCAmJiBlbmQpIHtcbiAgICAgICAgbGluZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgbGluZS5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XG4gICAgICAgIGxpbmUubGluZVRvKGVuZC54LCBlbmQueSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKGxpbmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGluZTtcbn1cblxudmFyIEJvYXJkID0gZnVuY3Rpb24obWFpbiwgY2FudmFzKSB7XG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICB2YXIgY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICBjb25maWcubWFpbiA9IG1haW47XG4gICAgY29uZmlnLmNhbnZhcyA9IGNhbnZhcztcblxuICAgIGlmIChjYW52YXMgJiYgY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgY29uZmlnLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uZmlnLnNpemUgPSByZXNpemUoY29uZmlnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uZmlnLnNpemUgPSByZXNpemUoY29uZmlnKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zaXplID0gcmVzaXplKGNvbmZpZyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG59O1xuXG5Cb2FyZC5wcm90b3R5cGUgPSB7XG5cbiAgICBnZXRDYW52YXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY2FudmFzO1xuICAgIH0sXG5cbiAgICBnZXRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnRleHQ7XG4gICAgfSxcblxuICAgIGdldFNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuc2l6ZTtcbiAgICB9LFxuXG4gICAgZ2V0UGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYXJ0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiZnVuY3Rpb24gZHJhdyhjb250ZXh0LCBwb3NYLCBwb3NZLCBwYXJ0LCBjb2xvcikge1xuICAgIHZhciBwYXRoID0gbmV3IFBhdGgyRCgpO1xuICAgIHZhciByYWRpdXMgPSBNYXRoLmZsb29yKChwYXJ0ICogMC44KSAqIDAuNSk7XG4gICAgdmFyIHggPSAocG9zWCAqIHBhcnQpICsgKHBhcnQgLyAyKTtcbiAgICB2YXIgeSA9IChwb3NZICogcGFydCkgKyAocGFydCAvIDIpO1xuXG4gICAgcGF0aC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuXG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsKHBhdGgpO1xuICAgIH1cbn1cblxudmFyIFBpZWNlID0gZnVuY3Rpb24oY29udGV4dCwgcG9zWCwgcG9zWSwgY29sb3IsIHBhcnQpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgY29udGV4dDogY29udGV4dCA/IGNvbnRleHQgOiBudWxsLFxuICAgICAgICBwb3NYOiBwb3NYID8gcG9zWCA6IDAsXG4gICAgICAgIHBvc1k6IHBvc1kgPyBwb3NZIDogMCxcbiAgICAgICAgY29sb3I6IGNvbG9yID8gY29sb3IgOiAnIzAwMDAwMCcsXG4gICAgICAgIHBhcnQ6IHBhcnQgPyBwYXJ0IDogMFxuICAgIH07XG5cbiAgICB0aGlzLnJlZHJhdygpO1xufTtcblxuUGllY2UucHJvdG90eXBlID0ge1xuICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMuY29uZmlnLnBvc1gsXG4gICAgICAgICAgICB5OiB0aGlzLmNvbmZpZy5wb3NZXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0Q29sb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29sb3I7XG4gICAgfSxcblxuICAgIHJlZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgZHJhdyhjb25maWcuY29udGV4dCwgY29uZmlnLnBvc1gsIGNvbmZpZy5wb3NZLCBjb25maWcucGFydCwgY29uZmlnLmNvbG9yKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBpZWNlOyIsInZhciBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQnKTtcbnZhciBQaWVjZSA9IHJlcXVpcmUoJy4vUGllY2UnKTtcblxuZnVuY3Rpb24gUmV2ZXJzaShwYXJlbnQsIGNhbnZhcykge1xuICAgIC8vIFByZXZlbnQgdGhlIHNjcmVlbiB0byBtb3ZlIG9uIHRvdWNoLlxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHBhcmVudCwgY2FudmFzKTtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmJvYXJkLmdldENvbnRleHQoKTtcbiAgICB0aGlzLnBhcnQgPSB0aGlzLmJvYXJkLmdldFBhcnQoKTtcbiAgICB0aGlzLnBpZWNlcyA9IFtdO1xuXG4gICAgdGhpcy5zdGFydEdhbWUoKTtcblxuXG4gICAgLy92YXIgcGllY2UgPSBuZXcgUGllY2UoY29udGV4dCwgMywgMiwgJyNmZmZmZmYnLCBwYXJ0KTtcbn1cblxuUmV2ZXJzaS5wcm90b3R5cGUgPSB7XG4gICAgc3RhcnRHYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5waWVjZXMgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBpbml0aWFsIHBpZWNlcyBpbiBjZW50ZXIuXG4gICAgICAgIHRoaXMucGxheWVyMSg0LCAzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxKDMsIDQpO1xuICAgICAgICB0aGlzLnBsYXllcjIoMywgMyk7XG4gICAgICAgIHRoaXMucGxheWVyMig0LCA0KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlUGllY2U6IGZ1bmN0aW9uKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMucGllY2VzLnB1c2gobmV3IFBpZWNlKHRoaXMuY29udGV4dCwgeCwgeSwgY29sb3IsIHRoaXMucGFydCkpO1xuICAgIH0sXG5cbiAgICBwbGF5ZXIxOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUGllY2UoeCwgeSwgJyMwMDAwMDAnKTtcbiAgICB9LFxuXG4gICAgcGxheWVyMjogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBpZWNlKHgsIHksICcjRkZGRkZGJyk7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJldmVyc2k7IiwidmFyIFJldmVyc2kgPSByZXF1aXJlKCcuL1JldmVyc2knKTtcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQnKTtcblxudmFyIGdhbWVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcblxudmFyIGdhbWUgPSBuZXcgUmV2ZXJzaShnYW1lQXJlYSwgY2FudmFzKTtcbiJdfQ==
