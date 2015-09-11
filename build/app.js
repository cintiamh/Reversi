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

    context.fillStyle = color;
    context.fill(path);
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
},{}],3:[function(require,module,exports){
var Board = require('./Board');
var Piece = require('./Piece');

var canvasEl;
var context;
var canvasSize;

function Reversi(parent, canvas) {
    var board = new Board(parent, canvas);
    var context = board.getContext();
    var part = board.getPart();
    //var piece = new Piece(context, 3, 2, '#ffffff', part);
}

Reversi.prototype = {
    getContext: function() {
        return context;
    },

    getCanvasSize: function() {
        if (canvasEl && canvasEl.offsetWidth) {
            canvasSize = canvasEl.offsetWidth;
        }
        else {
            canvasSize = 800;
        }
        return canvasSize;
    },

    drawBoard: function() {
        var space = Math.floor(canvasSize / 8);
        console.log(canvasSize, space);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUGllY2UuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gcmVzaXplKGNvbmZpZykge1xuICAgIHZhciBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIG5ld1dpZHRoVG9IZWlnaHQgPSBuZXdXaWR0aCAvIG5ld0hlaWdodDtcbiAgICB2YXIgc2l6ZTtcblxuICAgIGlmIChuZXdXaWR0aFRvSGVpZ2h0ID4gMSkge1xuICAgICAgICBzaXplID0gbmV3SGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2l6ZSA9IG5ld1dpZHRoO1xuICAgIH1cbiAgICB2YXIgcGFydCA9IE1hdGguZmxvb3Ioc2l6ZSAvIDgpO1xuICAgIHNpemUgPSBwYXJ0ICogODtcblxuICAgIGNvbmZpZy5tYWluLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgIGNvbmZpZy5tYWluLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XG5cbiAgICBjb25maWcubWFpbi5zdHlsZS5tYXJnaW5Ub3AgPSAoLXNpemUgLyAyKSArICdweCc7XG4gICAgY29uZmlnLm1haW4uc3R5bGUubWFyZ2luTGVmdCA9ICgtc2l6ZSAvIDIpICsgJ3B4JztcblxuICAgIGNvbmZpZy5jYW52YXMud2lkdGggPSBzaXplO1xuICAgIGNvbmZpZy5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcblxuICAgIGRyYXcoY29uZmlnLmNvbnRleHQsIHBhcnQsIHNpemUpO1xuICAgIGNvbmZpZy5wYXJ0ID0gcGFydDtcbiAgICBjb25maWcuc2l6ZSA9IHNpemU7XG5cbiAgICByZXR1cm4gc2l6ZTtcbn1cblxuZnVuY3Rpb24gZHJhdyhjb250ZXh0LCBwYXJ0LCBzaXplKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IFwiMXB4XCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgLy8gSG9yaXpvbnRhbCBMaW5lc1xuICAgICAgICBkcmF3TGluZShjb250ZXh0LCB7eDogMCwgeTogcGFydCAqIGl9LCB7eDogc2l6ZSwgeTogcGFydCAqIGl9KTtcbiAgICAgICAgLy8gVmVydGljYWwgTGluZXNcbiAgICAgICAgZHJhd0xpbmUoY29udGV4dCwge3g6IHBhcnQgKiBpLCB5OiAwfSwge3g6IHBhcnQgKiBpLCB5OiBzaXplfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBkcmF3TGluZShjb250ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIGxpbmU7XG4gICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5zdHJva2UgJiYgc3RhcnQgJiYgZW5kKSB7XG4gICAgICAgIGxpbmUgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICBsaW5lLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZShsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmU7XG59XG5cbnZhciBCb2FyZCA9IGZ1bmN0aW9uKG1haW4sIGNhbnZhcykge1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgY29uZmlnLm1haW4gPSBtYWluO1xuICAgIGNvbmZpZy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgIGNvbmZpZy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbmZpZy5zaXplID0gcmVzaXplKGNvbmZpZyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zaXplID0gcmVzaXplKGNvbmZpZyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25maWcuc2l6ZSA9IHJlc2l6ZShjb25maWcpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxufTtcblxuQm9hcmQucHJvdG90eXBlID0ge1xuXG4gICAgZ2V0Q2FudmFzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNhbnZhcztcbiAgICB9LFxuXG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnNpemU7XG4gICAgfSxcblxuICAgIGdldFBhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGFydDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImZ1bmN0aW9uIGRyYXcoY29udGV4dCwgcG9zWCwgcG9zWSwgcGFydCwgY29sb3IpIHtcbiAgICB2YXIgcGF0aCA9IG5ldyBQYXRoMkQoKTtcbiAgICB2YXIgcmFkaXVzID0gTWF0aC5mbG9vcigocGFydCAqIDAuOCkgKiAwLjUpO1xuICAgIHZhciB4ID0gKHBvc1ggKiBwYXJ0KSArIChwYXJ0IC8gMik7XG4gICAgdmFyIHkgPSAocG9zWSAqIHBhcnQpICsgKHBhcnQgLyAyKTtcblxuICAgIHBhdGguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5maWxsKHBhdGgpO1xufVxuXG52YXIgUGllY2UgPSBmdW5jdGlvbihjb250ZXh0LCBwb3NYLCBwb3NZLCBjb2xvciwgcGFydCkge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0ID8gY29udGV4dCA6IG51bGwsXG4gICAgICAgIHBvc1g6IHBvc1ggPyBwb3NYIDogMCxcbiAgICAgICAgcG9zWTogcG9zWSA/IHBvc1kgOiAwLFxuICAgICAgICBjb2xvcjogY29sb3IgPyBjb2xvciA6ICcjMDAwMDAwJyxcbiAgICAgICAgcGFydDogcGFydCA/IHBhcnQgOiAwXG4gICAgfTtcblxuICAgIHZhciBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgIGRyYXcoY29uZmlnLmNvbnRleHQsIGNvbmZpZy5wb3NYLCBjb25maWcucG9zWSwgY29uZmlnLnBhcnQsIGNvbmZpZy5jb2xvcik7XG59O1xuXG5QaWVjZS5wcm90b3R5cGUgPSB7XG4gICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy5jb25maWcucG9zWCxcbiAgICAgICAgICAgIHk6IHRoaXMuY29uZmlnLnBvc1lcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRDb2xvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb2xvcjtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBpZWNlOyIsInZhciBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQnKTtcbnZhciBQaWVjZSA9IHJlcXVpcmUoJy4vUGllY2UnKTtcblxudmFyIGNhbnZhc0VsO1xudmFyIGNvbnRleHQ7XG52YXIgY2FudmFzU2l6ZTtcblxuZnVuY3Rpb24gUmV2ZXJzaShwYXJlbnQsIGNhbnZhcykge1xuICAgIHZhciBib2FyZCA9IG5ldyBCb2FyZChwYXJlbnQsIGNhbnZhcyk7XG4gICAgdmFyIGNvbnRleHQgPSBib2FyZC5nZXRDb250ZXh0KCk7XG4gICAgdmFyIHBhcnQgPSBib2FyZC5nZXRQYXJ0KCk7XG4gICAgLy92YXIgcGllY2UgPSBuZXcgUGllY2UoY29udGV4dCwgMywgMiwgJyNmZmZmZmYnLCBwYXJ0KTtcbn1cblxuUmV2ZXJzaS5wcm90b3R5cGUgPSB7XG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRDYW52YXNTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNhbnZhc0VsICYmIGNhbnZhc0VsLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gY2FudmFzRWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gODAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXNTaXplO1xuICAgIH0sXG5cbiAgICBkcmF3Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKGNhbnZhc1NpemUgLyA4KTtcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzU2l6ZSwgc3BhY2UpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJzaTsiLCJ2YXIgUmV2ZXJzaSA9IHJlcXVpcmUoJy4vUmV2ZXJzaScpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xuXG52YXIgZ2FtZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xuXG52YXIgZ2FtZSA9IG5ldyBSZXZlcnNpKGdhbWVBcmVhLCBjYW52YXMpO1xuIl19
