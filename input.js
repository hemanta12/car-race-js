let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(ev) {
    ev.preventDefault();
    keys[ev.key] = true;

}

function keyUp(ev) {
    ev.preventDefault();
    keys[ev.key] = false;

}