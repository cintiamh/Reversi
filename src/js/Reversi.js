var context;

function Reversi(canvas) {
    if (canvas && canvas.tagName === 'canvas') {
        context = canvas.getContext('2d');
    }
}

Reversi.prototype = {
    getContext: function() {
        console.log("inside", context);
        return context;
    }
};

module.exports = Reversi;