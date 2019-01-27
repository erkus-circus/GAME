var deltaTime
    ltc = 0,
    world = {},
    canv,
    c;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    
};



function _init(e) {
    canv = $('.canv');
    c = canv[0].getContext('2d');
};

window.onload = _init;