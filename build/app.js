(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
var Board = require('./Board');

var canvasEl;
var context;
var canvasSize;

function Reversi(canvas) {
    var board = new Board(canvas);
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
},{"./Board":1}],3:[function(require,module,exports){
var Reversi = require('./Reversi');
var Board = require('./Board');

var canvas = document.getElementById('board');

var game = new Reversi();
var board = new Board(canvas);

},{"./Board":1,"./Reversi":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY29udGV4dDtcblxudmFyIEJvYXJkID0gZnVuY3Rpb24oY2FudmFzKSB7XG5cbiAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcoKTtcbn07XG5cbkJvYXJkLnByb3RvdHlwZSA9IHtcblxuICAgIGdldENhbnZhczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0ID8gY29udGV4dC5jYW52YXMgOiBudWxsO1xuICAgIH0sXG5cbiAgICBnZXRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfSxcblxuICAgIHNldEhlaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBjb250ZXh0ID8gY29udGV4dC5jYW52YXMgOiBudWxsO1xuICAgICAgICB2YXIgc2l6ZTtcblxuICAgICAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgc2l6ZSA9IGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9LFxuXG4gICAgZHJhd0xpbmU6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdmFyIGxpbmU7XG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3Ryb2tlICYmIHN0YXJ0ICYmIGVuZCkge1xuICAgICAgICAgICAgbGluZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgICAgIGxpbmUubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgbGluZS5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH0sXG5cbiAgICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLnNldEhlaWdodCgpO1xuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gXCIxcHhcIjtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gTWF0aC5jZWlsKHNpemUgLyA4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoe3g6MTAwLCB5OjB9LCB7eDoxMDAsIHk6ODAwfSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBIb3Jpem9udGFsIExpbmVzXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZSh7eDogMCwgeTogcGFydCAqIGl9LCB7eDogc2l6ZSwgeTogcGFydCAqIGl9KTtcbiAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBMaW5lc1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoe3g6IHBhcnQgKiBpLCB5OiAwfSwge3g6IHBhcnQgKiBpLCB5OiBzaXplfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsInZhciBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQnKTtcblxudmFyIGNhbnZhc0VsO1xudmFyIGNvbnRleHQ7XG52YXIgY2FudmFzU2l6ZTtcblxuZnVuY3Rpb24gUmV2ZXJzaShjYW52YXMpIHtcbiAgICB2YXIgYm9hcmQgPSBuZXcgQm9hcmQoY2FudmFzKTtcbn1cblxuUmV2ZXJzaS5wcm90b3R5cGUgPSB7XG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRDYW52YXNTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNhbnZhc0VsICYmIGNhbnZhc0VsLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gY2FudmFzRWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gODAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXNTaXplO1xuICAgIH0sXG5cbiAgICBkcmF3Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKGNhbnZhc1NpemUgLyA4KTtcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzU2l6ZSwgc3BhY2UpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJzaTsiLCJ2YXIgUmV2ZXJzaSA9IHJlcXVpcmUoJy4vUmV2ZXJzaScpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5cbnZhciBnYW1lID0gbmV3IFJldmVyc2koKTtcbnZhciBib2FyZCA9IG5ldyBCb2FyZChjYW52YXMpO1xuIl19
