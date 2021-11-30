//creating line at the middle of the road
function createLines() {
    for (x = 0; x < 5; x++) {
        let roadline = document.createElement('div');
        roadline.setAttribute('class', 'lines');
        roadline.y = (x * 150);
        roadline.style.top = roadline.y + 'px';
        gamearea.appendChild(roadline);
    }
}

//move the middle white line for the animation effect
function moveLines() {
    let lines = document.querySelectorAll('.lines');
    lines.forEach(function(item) {
        if (item.y >= 700) {
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
}