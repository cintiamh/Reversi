(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var canvas;
var context;

var Board = function(element) {
    canvas = element;

    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
    }
};

Board.prototype = {

    getCanvas: function() {
        return canvas;
    },

    getContext: function() {
        return context;
    },

    getSize: function() {
        var width;
        if (canvas && canvas.offsetWidth) {
            width = canvas.offsetWidth;
        }
        return width;
    },

    setHeight: function() {
        var size = this.getSize();
        if (size > 2) {
            size = size - 2;
            if (canvas.style) {
                canvas.style.height = size + "px";
            }
        }
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
console.log("BOARD", board.getSize());
board.setHeight();

},{"./Board":1,"./Reversi":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY2FudmFzO1xudmFyIGNvbnRleHQ7XG5cbnZhciBCb2FyZCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBjYW52YXMgPSBlbGVtZW50O1xuXG4gICAgaWYgKGNhbnZhcyAmJiBjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxufTtcblxuQm9hcmQucHJvdG90eXBlID0ge1xuXG4gICAgZ2V0Q2FudmFzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9LFxuXG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHdpZHRoO1xuICAgICAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG5cbiAgICBzZXRIZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICBpZiAoc2l6ZSA+IDIpIHtcbiAgICAgICAgICAgIHNpemUgPSBzaXplIC0gMjtcbiAgICAgICAgICAgIGlmIChjYW52YXMuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArIFwicHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJ2YXIgQm9hcmQgPSByZXF1aXJlKCcuL0JvYXJkJyk7XG5cbnZhciBjYW52YXNFbDtcbnZhciBjb250ZXh0O1xudmFyIGNhbnZhc1NpemU7XG5cbmZ1bmN0aW9uIFJldmVyc2koY2FudmFzKSB7XG4gICAgdmFyIGJvYXJkID0gbmV3IEJvYXJkKGNhbnZhcyk7XG59XG5cblJldmVyc2kucHJvdG90eXBlID0ge1xuICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9LFxuXG4gICAgZ2V0Q2FudmFzU2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjYW52YXNFbCAmJiBjYW52YXNFbC5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgY2FudmFzU2l6ZSA9IGNhbnZhc0VsLm9mZnNldFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzU2l6ZSA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FudmFzU2l6ZTtcbiAgICB9LFxuXG4gICAgZHJhd0JvYXJkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNwYWNlID0gTWF0aC5mbG9vcihjYW52YXNTaXplIC8gOCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbnZhc1NpemUsIHNwYWNlKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJldmVyc2k7IiwidmFyIFJldmVyc2kgPSByZXF1aXJlKCcuL1JldmVyc2knKTtcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQnKTtcblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xuXG52YXIgZ2FtZSA9IG5ldyBSZXZlcnNpKCk7XG52YXIgYm9hcmQgPSBuZXcgQm9hcmQoY2FudmFzKTtcbmNvbnNvbGUubG9nKFwiQk9BUkRcIiwgYm9hcmQuZ2V0U2l6ZSgpKTtcbmJvYXJkLnNldEhlaWdodCgpO1xuIl19
