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