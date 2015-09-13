(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        this.redraw();
        //config.size = resize(config);
        //window.addEventListener('resize', function() {
        //    config.size = resize(config);
        //}, false);
        //window.addEventListener('orientationchange', function() {
        //    config.size = resize(config);
        //}, false);
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
    },

    redraw: function() {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;
        var newWidthToHeight = newWidth / newHeight;
        var config = this.config;
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

        console.log("REDRAW BOARD", this.config);
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

    redraw: function(part) {
        var config = this.config;
        config.part = part ? part : config.part;
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
}

Reversi.prototype = {
    startGame: function() {
        this.pieces = [];
        // create the initial pieces in center.
        this.player1(4, 3);
        this.player1(3, 4);
        this.player2(3, 3);
        this.player2(4, 4);

        var redraw = this.redrawAll;
        var board = this.board;
        var pieces = this.pieces;

        window.addEventListener('resize', function() {
            redraw(board, pieces);
        }, false);
        window.addEventListener('orientationchange', function() {
            redraw(board, pieces);
        }, false);
    },

    createPiece: function(x, y, color) {
        this.pieces.push(new Piece(this.context, x, y, color, this.part));
    },

    player1: function(x, y) {
        this.createPiece(x, y, '#000000');
    },

    player2: function(x, y) {
        this.createPiece(x, y, '#FFFFFF');
    },

    redrawAll: function(board, pieces) {
        var part;

        if (board && board.redraw) {
            board.redraw();
            part = board.getPart();
        }
        pieces.map(function(piece) {
            if (piece && piece.redraw) {
                piece.redraw(part);
            }
        });
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUGllY2UuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gZHJhdyhjb250ZXh0LCBwYXJ0LCBzaXplKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IFwiMXB4XCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgLy8gSG9yaXpvbnRhbCBMaW5lc1xuICAgICAgICBkcmF3TGluZShjb250ZXh0LCB7eDogMCwgeTogcGFydCAqIGl9LCB7eDogc2l6ZSwgeTogcGFydCAqIGl9KTtcbiAgICAgICAgLy8gVmVydGljYWwgTGluZXNcbiAgICAgICAgZHJhd0xpbmUoY29udGV4dCwge3g6IHBhcnQgKiBpLCB5OiAwfSwge3g6IHBhcnQgKiBpLCB5OiBzaXplfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBkcmF3TGluZShjb250ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIGxpbmU7XG4gICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5zdHJva2UgJiYgc3RhcnQgJiYgZW5kKSB7XG4gICAgICAgIGxpbmUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICBsaW5lLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZShsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmU7XG59XG5cbnZhciBCb2FyZCA9IGZ1bmN0aW9uKG1haW4sIGNhbnZhcykge1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgY29uZmlnLm1haW4gPSBtYWluO1xuICAgIGNvbmZpZy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgIGNvbmZpZy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIC8vY29uZmlnLnNpemUgPSByZXNpemUoY29uZmlnKTtcbiAgICAgICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgIGNvbmZpZy5zaXplID0gcmVzaXplKGNvbmZpZyk7XG4gICAgICAgIC8vfSwgZmFsc2UpO1xuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICBjb25maWcuc2l6ZSA9IHJlc2l6ZShjb25maWcpO1xuICAgICAgICAvL30sIGZhbHNlKTtcbiAgICB9XG59O1xuXG5Cb2FyZC5wcm90b3R5cGUgPSB7XG5cbiAgICBnZXRDYW52YXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY2FudmFzO1xuICAgIH0sXG5cbiAgICBnZXRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnRleHQ7XG4gICAgfSxcblxuICAgIGdldFNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuc2l6ZTtcbiAgICB9LFxuXG4gICAgZ2V0UGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYXJ0O1xuICAgIH0sXG5cbiAgICByZWRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIG5ld1dpZHRoVG9IZWlnaHQgPSBuZXdXaWR0aCAvIG5ld0hlaWdodDtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICB2YXIgc2l6ZTtcblxuICAgICAgICBpZiAobmV3V2lkdGhUb0hlaWdodCA+IDEpIHtcbiAgICAgICAgICAgIHNpemUgPSBuZXdIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaXplID0gbmV3V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnQgPSBNYXRoLmZsb29yKHNpemUgLyA4KTtcbiAgICAgICAgc2l6ZSA9IHBhcnQgKiA4O1xuXG4gICAgICAgIGNvbmZpZy5tYWluLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgICBjb25maWcubWFpbi5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xuXG4gICAgICAgIGNvbmZpZy5tYWluLnN0eWxlLm1hcmdpblRvcCA9ICgtc2l6ZSAvIDIpICsgJ3B4JztcbiAgICAgICAgY29uZmlnLm1haW4uc3R5bGUubWFyZ2luTGVmdCA9ICgtc2l6ZSAvIDIpICsgJ3B4JztcblxuICAgICAgICBjb25maWcuY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICAgICAgY29uZmlnLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuXG4gICAgICAgIGRyYXcoY29uZmlnLmNvbnRleHQsIHBhcnQsIHNpemUpO1xuXG4gICAgICAgIGNvbmZpZy5wYXJ0ID0gcGFydDtcbiAgICAgICAgY29uZmlnLnNpemUgPSBzaXplO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVEUkFXIEJPQVJEXCIsIHRoaXMuY29uZmlnKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImZ1bmN0aW9uIGRyYXcoY29udGV4dCwgcG9zWCwgcG9zWSwgcGFydCwgY29sb3IpIHtcbiAgICB2YXIgcGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICB2YXIgcmFkaXVzID0gTWF0aC5mbG9vcigocGFydCAqIDAuOCkgKiAwLjUpO1xuICAgIHZhciB4ID0gKHBvc1ggKiBwYXJ0KSArIChwYXJ0IC8gMik7XG4gICAgdmFyIHkgPSAocG9zWSAqIHBhcnQpICsgKHBhcnQgLyAyKTtcblxuICAgIHBhdGguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbChwYXRoKTtcbiAgICB9XG59XG5cbnZhciBQaWVjZSA9IGZ1bmN0aW9uKGNvbnRleHQsIHBvc1gsIHBvc1ksIGNvbG9yLCBwYXJ0KSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQgPyBjb250ZXh0IDogbnVsbCxcbiAgICAgICAgcG9zWDogcG9zWCA/IHBvc1ggOiAwLFxuICAgICAgICBwb3NZOiBwb3NZID8gcG9zWSA6IDAsXG4gICAgICAgIGNvbG9yOiBjb2xvciA/IGNvbG9yIDogJyMwMDAwMDAnLFxuICAgICAgICBwYXJ0OiBwYXJ0ID8gcGFydCA6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbn07XG5cblBpZWNlLnByb3RvdHlwZSA9IHtcbiAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvbmZpZy5wb3NYLFxuICAgICAgICAgICAgeTogdGhpcy5jb25maWcucG9zWVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldENvbG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbG9yO1xuICAgIH0sXG5cbiAgICByZWRyYXc6IGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25maWcucGFydCA9IHBhcnQgPyBwYXJ0IDogY29uZmlnLnBhcnQ7XG4gICAgICAgIGRyYXcoY29uZmlnLmNvbnRleHQsIGNvbmZpZy5wb3NYLCBjb25maWcucG9zWSwgY29uZmlnLnBhcnQsIGNvbmZpZy5jb2xvcik7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQaWVjZTsiLCJ2YXIgQm9hcmQgPSByZXF1aXJlKCcuL0JvYXJkJyk7XG52YXIgUGllY2UgPSByZXF1aXJlKCcuL1BpZWNlJyk7XG5cbmZ1bmN0aW9uIFJldmVyc2kocGFyZW50LCBjYW52YXMpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBzY3JlZW4gdG8gbW92ZSBvbiB0b3VjaC5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChwYXJlbnQsIGNhbnZhcyk7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5ib2FyZC5nZXRDb250ZXh0KCk7XG4gICAgdGhpcy5wYXJ0ID0gdGhpcy5ib2FyZC5nZXRQYXJ0KCk7XG4gICAgdGhpcy5waWVjZXMgPSBbXTtcblxuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG59XG5cblJldmVyc2kucHJvdG90eXBlID0ge1xuICAgIHN0YXJ0R2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucGllY2VzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgaW5pdGlhbCBwaWVjZXMgaW4gY2VudGVyLlxuICAgICAgICB0aGlzLnBsYXllcjEoNCwgMyk7XG4gICAgICAgIHRoaXMucGxheWVyMSgzLCA0KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyKDMsIDMpO1xuICAgICAgICB0aGlzLnBsYXllcjIoNCwgNCk7XG5cbiAgICAgICAgdmFyIHJlZHJhdyA9IHRoaXMucmVkcmF3QWxsO1xuICAgICAgICB2YXIgYm9hcmQgPSB0aGlzLmJvYXJkO1xuICAgICAgICB2YXIgcGllY2VzID0gdGhpcy5waWVjZXM7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVkcmF3KGJvYXJkLCBwaWVjZXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVkcmF3KGJvYXJkLCBwaWVjZXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVBpZWNlOiBmdW5jdGlvbih4LCB5LCBjb2xvcikge1xuICAgICAgICB0aGlzLnBpZWNlcy5wdXNoKG5ldyBQaWVjZSh0aGlzLmNvbnRleHQsIHgsIHksIGNvbG9yLCB0aGlzLnBhcnQpKTtcbiAgICB9LFxuXG4gICAgcGxheWVyMTogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBpZWNlKHgsIHksICcjMDAwMDAwJyk7XG4gICAgfSxcblxuICAgIHBsYXllcjI6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQaWVjZSh4LCB5LCAnI0ZGRkZGRicpO1xuICAgIH0sXG5cbiAgICByZWRyYXdBbGw6IGZ1bmN0aW9uKGJvYXJkLCBwaWVjZXMpIHtcbiAgICAgICAgdmFyIHBhcnQ7XG5cbiAgICAgICAgaWYgKGJvYXJkICYmIGJvYXJkLnJlZHJhdykge1xuICAgICAgICAgICAgYm9hcmQucmVkcmF3KCk7XG4gICAgICAgICAgICBwYXJ0ID0gYm9hcmQuZ2V0UGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHBpZWNlcy5tYXAoZnVuY3Rpb24ocGllY2UpIHtcbiAgICAgICAgICAgIGlmIChwaWVjZSAmJiBwaWVjZS5yZWRyYXcpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5yZWRyYXcocGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXZlcnNpOyIsInZhciBSZXZlcnNpID0gcmVxdWlyZSgnLi9SZXZlcnNpJyk7XG52YXIgQm9hcmQgPSByZXF1aXJlKCcuL0JvYXJkJyk7XG5cbnZhciBnYW1lQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5cbnZhciBnYW1lID0gbmV3IFJldmVyc2koZ2FtZUFyZWEsIGNhbnZhcyk7XG4iXX0=
