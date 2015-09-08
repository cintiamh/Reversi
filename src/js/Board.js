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