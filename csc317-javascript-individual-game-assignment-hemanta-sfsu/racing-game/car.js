function createUserCar() {
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gamearea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

}

function createEnemyCar() {
    for (x = 0; x < 3; x++) {
        let enemycar = document.createElement('div');
        enemycar.setAttribute('class', 'enemy');
        enemycar.y = ((x + 1) * 350) * -1;
        enemycar.style.top = enemycar.y + 'px';
        enemycar.style.left = Math.floor(Math.random() * 350) + 'px';
        gamearea.appendChild(enemycar);
    }
}

function moveCar(car) {
    let enemyCar = document.querySelectorAll('.enemy');
    enemyCar.forEach(function(item) {
        if (Collide(car, item)) {
            endGame();
        }
        if (item.y >= 750) {
            item.y = -300;
            item.style.left = Math.floor(Math.random() * 350) + 'px';
        }
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
}