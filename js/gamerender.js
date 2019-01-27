var deltaTime
    ltc = 0,
    world = {},
    canv,
    c;

function drawBackground() {
    // Draws the correct background.
    c.beginPath()
    
    c.endPath()
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    c.clearRect(0,0,canv[0].width, canv[0].height)

    drawBackground()


};



function _init(e) {
    canv = $('.canv');
    c = canv[0].getContext('2d');
};

window.onload = _init;