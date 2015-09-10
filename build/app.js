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
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
var Board = require('./Board');
var Piece = require('./Piece');

var canvasEl;
var context;
var canvasSize;

function Reversi(parent, canvas) {
    var board = new Board(parent, canvas);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUGllY2UuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gcmVzaXplKGNvbmZpZykge1xuICAgIHZhciBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIG5ld1dpZHRoVG9IZWlnaHQgPSBuZXdXaWR0aCAvIG5ld0hlaWdodDtcbiAgICB2YXIgc2l6ZTtcblxuICAgIGlmIChuZXdXaWR0aFRvSGVpZ2h0ID4gMSkge1xuICAgICAgICBzaXplID0gbmV3SGVpZ2h0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2l6ZSA9IG5ld1dpZHRoO1xuICAgIH1cblxuICAgIGNvbmZpZy5tYWluLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgIGNvbmZpZy5tYWluLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XG5cbiAgICBjb25maWcubWFpbi5zdHlsZS5tYXJnaW5Ub3AgPSAoLXNpemUgLyAyKSArICdweCc7XG4gICAgY29uZmlnLm1haW4uc3R5bGUubWFyZ2luTGVmdCA9ICgtc2l6ZSAvIDIpICsgJ3B4JztcblxuICAgIGNvbmZpZy5jYW52YXMud2lkdGggPSBzaXplO1xuICAgIGNvbmZpZy5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcblxuICAgIGRyYXcoY29uZmlnLmNvbnRleHQsIHNpemUpO1xuICAgIGNvbmZpZy5zaXplID0gc2l6ZTtcblxuICAgIHJldHVybiBzaXplO1xufVxuXG5mdW5jdGlvbiBkcmF3KGNvbnRleHQsIHNpemUpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gXCIxcHhcIjtcbiAgICB2YXIgcGFydCA9IE1hdGguY2VpbChzaXplIC8gOCk7XG4gICAgZHJhd0xpbmUoe3g6MTAwLCB5OjB9LCB7eDoxMDAsIHk6ODAwfSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIC8vIEhvcml6b250YWwgTGluZXNcbiAgICAgICAgZHJhd0xpbmUoY29udGV4dCwge3g6IDAsIHk6IHBhcnQgKiBpfSwge3g6IHNpemUsIHk6IHBhcnQgKiBpfSk7XG4gICAgICAgIC8vIFZlcnRpY2FsIExpbmVzXG4gICAgICAgIGRyYXdMaW5lKGNvbnRleHQsIHt4OiBwYXJ0ICogaSwgeTogMH0sIHt4OiBwYXJ0ICogaSwgeTogc2l6ZX0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZHJhd0xpbmUoY29udGV4dCwgc3RhcnQsIGVuZCkge1xuICAgIHZhciBsaW5lO1xuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3Ryb2tlICYmIHN0YXJ0ICYmIGVuZCkge1xuICAgICAgICBsaW5lID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBsaW5lLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcbiAgICAgICAgbGluZS5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgY29udGV4dC5zdHJva2UobGluZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5lO1xufVxuXG52YXIgQm9hcmQgPSBmdW5jdGlvbihtYWluLCBjYW52YXMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHZhciBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgIGNvbmZpZy5tYWluID0gbWFpbjtcbiAgICBjb25maWcuY2FudmFzID0gY2FudmFzO1xuXG4gICAgaWYgKGNhbnZhcyAmJiBjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICBjb25maWcuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25maWcuc2l6ZSA9IHJlc2l6ZShjb25maWcpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25maWcuc2l6ZSA9IHJlc2l6ZShjb25maWcpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uZmlnLnNpemUgPSByZXNpemUoY29uZmlnKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbn07XG5cbkJvYXJkLnByb3RvdHlwZSA9IHtcblxuICAgIGdldENhbnZhczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jYW52YXM7XG4gICAgfSxcblxuICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29udGV4dDtcbiAgICB9LFxuXG4gICAgZ2V0U2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zaXplO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwidmFyIFBpZWNlID0gZnVuY3Rpb24oY29udGV4dCwgcG9zWCwgcG9zWSwgY29sb3IpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgY29udGV4dDogY29udGV4dCA/IGNvbnRleHQgOiBudWxsLFxuICAgICAgICBwb3NYOiBwb3NYID8gcG9zWCA6IDAsXG4gICAgICAgIHBvc1k6IHBvc1kgPyBwb3NZIDogMCxcbiAgICAgICAgY29sb3I6IGNvbG9yID8gY29sb3IgOiAnYmxhY2snXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnUGllY2UnLCB0aGlzLmNvbmZpZyk7XG59O1xuXG5QaWVjZS5wcm90b3R5cGUgPSB7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGllY2U7IiwidmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xudmFyIFBpZWNlID0gcmVxdWlyZSgnLi9QaWVjZScpO1xuXG52YXIgY2FudmFzRWw7XG52YXIgY29udGV4dDtcbnZhciBjYW52YXNTaXplO1xuXG5mdW5jdGlvbiBSZXZlcnNpKHBhcmVudCwgY2FudmFzKSB7XG4gICAgdmFyIGJvYXJkID0gbmV3IEJvYXJkKHBhcmVudCwgY2FudmFzKTtcbn1cblxuUmV2ZXJzaS5wcm90b3R5cGUgPSB7XG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRDYW52YXNTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNhbnZhc0VsICYmIGNhbnZhc0VsLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gY2FudmFzRWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gODAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXNTaXplO1xuICAgIH0sXG5cbiAgICBkcmF3Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKGNhbnZhc1NpemUgLyA4KTtcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzU2l6ZSwgc3BhY2UpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJzaTsiLCJ2YXIgUmV2ZXJzaSA9IHJlcXVpcmUoJy4vUmV2ZXJzaScpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xuXG52YXIgZ2FtZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xuXG52YXIgZ2FtZSA9IG5ldyBSZXZlcnNpKGdhbWVBcmVhLCBjYW52YXMpO1xuIl19
