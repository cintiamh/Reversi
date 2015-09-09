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

var gameArea = document.getElementById('main');
var canvas = document.getElementById('board');

var game = new Reversi();
var board = new Board(gameArea, canvas);

},{"./Board":1,"./Reversi":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvQm9hcmQuanMiLCJzcmMvanMvUmV2ZXJzaS5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHJlc2l6ZShjb25maWcpIHtcbiAgICB2YXIgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBuZXdXaWR0aFRvSGVpZ2h0ID0gbmV3V2lkdGggLyBuZXdIZWlnaHQ7XG4gICAgdmFyIHNpemU7XG5cbiAgICBpZiAobmV3V2lkdGhUb0hlaWdodCA+IDEpIHtcbiAgICAgICAgc2l6ZSA9IG5ld0hlaWdodDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNpemUgPSBuZXdXaWR0aDtcbiAgICB9XG5cbiAgICBjb25maWcubWFpbi5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICBjb25maWcubWFpbi5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xuXG4gICAgY29uZmlnLm1haW4uc3R5bGUubWFyZ2luVG9wID0gKC1zaXplIC8gMikgKyAncHgnO1xuICAgIGNvbmZpZy5tYWluLnN0eWxlLm1hcmdpbkxlZnQgPSAoLXNpemUgLyAyKSArICdweCc7XG5cbiAgICBjb25maWcuY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICBjb25maWcuY2FudmFzLmhlaWdodCA9IHNpemU7XG5cbiAgICBkcmF3KGNvbmZpZy5jb250ZXh0LCBzaXplKTtcblxuICAgIHJldHVybiBzaXplO1xufVxuXG5mdW5jdGlvbiBkcmF3KGNvbnRleHQsIHNpemUpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gXCIxcHhcIjtcbiAgICB2YXIgcGFydCA9IE1hdGguY2VpbChzaXplIC8gOCk7XG4gICAgZHJhd0xpbmUoe3g6MTAwLCB5OjB9LCB7eDoxMDAsIHk6ODAwfSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIC8vIEhvcml6b250YWwgTGluZXNcbiAgICAgICAgZHJhd0xpbmUoY29udGV4dCwge3g6IDAsIHk6IHBhcnQgKiBpfSwge3g6IHNpemUsIHk6IHBhcnQgKiBpfSk7XG4gICAgICAgIC8vIFZlcnRpY2FsIExpbmVzXG4gICAgICAgIGRyYXdMaW5lKGNvbnRleHQsIHt4OiBwYXJ0ICogaSwgeTogMH0sIHt4OiBwYXJ0ICogaSwgeTogc2l6ZX0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZHJhd0xpbmUoY29udGV4dCwgc3RhcnQsIGVuZCkge1xuICAgIHZhciBsaW5lO1xuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3Ryb2tlICYmIHN0YXJ0ICYmIGVuZCkge1xuICAgICAgICBsaW5lID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBsaW5lLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcbiAgICAgICAgbGluZS5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgY29udGV4dC5zdHJva2UobGluZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5lO1xufVxuXG52YXIgQm9hcmQgPSBmdW5jdGlvbihtYWluLCBjYW52YXMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHZhciBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgIGNvbmZpZy5tYWluID0gbWFpbjtcbiAgICBjb25maWcuY2FudmFzID0gY2FudmFzO1xuXG4gICAgaWYgKGNhbnZhcyAmJiBjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICBjb25maWcuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25maWcuc2l6ZSA9IHJlc2l6ZShjb25maWcpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25maWcuc2l6ZSA9IHJlc2l6ZShjb25maWcpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uZmlnLnNpemUgPSByZXNpemUoY29uZmlnKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbn07XG5cbkJvYXJkLnByb3RvdHlwZSA9IHtcblxuICAgIGdldENhbnZhczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jYW52YXM7XG4gICAgfSxcblxuICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29udGV4dDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsInZhciBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQnKTtcblxudmFyIGNhbnZhc0VsO1xudmFyIGNvbnRleHQ7XG52YXIgY2FudmFzU2l6ZTtcblxuZnVuY3Rpb24gUmV2ZXJzaShjYW52YXMpIHtcbiAgICB2YXIgYm9hcmQgPSBuZXcgQm9hcmQoY2FudmFzKTtcbn1cblxuUmV2ZXJzaS5wcm90b3R5cGUgPSB7XG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH0sXG5cbiAgICBnZXRDYW52YXNTaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNhbnZhc0VsICYmIGNhbnZhc0VsLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gY2FudmFzRWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXNTaXplID0gODAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXNTaXplO1xuICAgIH0sXG5cbiAgICBkcmF3Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKGNhbnZhc1NpemUgLyA4KTtcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzU2l6ZSwgc3BhY2UpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmV2ZXJzaTsiLCJ2YXIgUmV2ZXJzaSA9IHJlcXVpcmUoJy4vUmV2ZXJzaScpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZCcpO1xuXG52YXIgZ2FtZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xuXG52YXIgZ2FtZSA9IG5ldyBSZXZlcnNpKCk7XG52YXIgYm9hcmQgPSBuZXcgQm9hcmQoZ2FtZUFyZWEsIGNhbnZhcyk7XG4iXX0=
