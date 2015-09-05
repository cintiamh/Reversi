(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var canvas;
var context;
var size;

var Board = function(element) {
    canvas = element;

    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
    }
};

Board.prototype = {
    getContext: function() {
        return context;
    },

    getSize: function() {
        
        if (canvas && canvas.offsetWidth) {
            var width = canvas.offsetWidth;
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
console.log("BOARD", board);
board.getSize();

},{"./Board":1,"./Reversi":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY2FudmFzO1xudmFyIGNvbnRleHQ7XG52YXIgc2l6ZTtcblxudmFyIEJvYXJkID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGNhbnZhcyA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG59O1xuXG5Cb2FyZC5wcm90b3R5cGUgPSB7XG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChjYW52YXMgJiYgY2FudmFzLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwidmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xuXG52YXIgY2FudmFzRWw7XG52YXIgY29udGV4dDtcbnZhciBjYW52YXNTaXplO1xuXG5mdW5jdGlvbiBSZXZlcnNpKGNhbnZhcykge1xuICAgIHZhciBib2FyZCA9IG5ldyBCb2FyZChjYW52YXMpO1xufVxuXG5SZXZlcnNpLnByb3RvdHlwZSA9IHtcbiAgICBnZXRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfSxcblxuICAgIGdldENhbnZhc1NpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY2FudmFzRWwgJiYgY2FudmFzRWwub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICAgIGNhbnZhc1NpemUgPSBjYW52YXNFbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbnZhc1NpemUgPSA4MDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbnZhc1NpemU7XG4gICAgfSxcblxuICAgIGRyYXdCb2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzcGFjZSA9IE1hdGguZmxvb3IoY2FudmFzU2l6ZSAvIDgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjYW52YXNTaXplLCBzcGFjZSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXZlcnNpOyIsInZhciBSZXZlcnNpID0gcmVxdWlyZSgnLi9SZXZlcnNpJyk7XG52YXIgQm9hcmQgPSByZXF1aXJlKCcuL0JvYXJkJyk7XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcblxudmFyIGdhbWUgPSBuZXcgUmV2ZXJzaSgpO1xudmFyIGJvYXJkID0gbmV3IEJvYXJkKGNhbnZhcyk7XG5jb25zb2xlLmxvZyhcIkJPQVJEXCIsIGJvYXJkKTtcbmJvYXJkLmdldFNpemUoKTtcbiJdfQ==
