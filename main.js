const startbtn = document.querySelector(".start-screen");
const score = document.querySelector(".score-screen");
const gamearea = document.querySelector('.gamearea');
const beginner = document.querySelector('#beginner');
const semipro = document.querySelector('#semi-pro');
const legendary = document.querySelector('#legendary');

let player = {
    speed: 0,
    score: 0
};
let highest = 0;

function gameLevel() {
    beginner.disabled = false;
    semipro.disabled = false;
    legendary.disabled = false;

    beginner.addEventListener('click', () => {
        player.speed = 5;
        beginner.disabled = false;
        beginner.classList.add("clicked");
        semipro.disabled = true;
        semipro.classList.remove('clicked');
        legendary.disabled = true;
        legendary.classList.remove('clicked');
    })

    semipro.addEventListener('click', () => {
        player.speed = 9;
        semipro.disabled = false;
        semipro.classList.add("clicked");
        beginner.disabled = true;
        beginner.classList.remove('clicked');
        legendary.disabled = true;
        legendary.classList.remove('clicked');

    })

    legendary.addEventListener('click', () => {
        player.speed = 14;
        legendary.disabled = false;
        legendary.classList.add("clicked");
        beginner.classList.remove('clicked');
        beginner.disabled = true;
        semipro.disabled = true;
        semipro.classList.remove('clicked');
    })
}

startbtn.addEventListener('click', start);
gameLevel();

function start() {
    startbtn.classList.add("hide");
    gamearea.innerHTML = "";

    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    createLines();
    createUserCar();
    createEnemyCar();
}

//actual gameplay 
function gamePlay() {
    let car = document.querySelector('.car');
    let road = gamearea.getBoundingClientRect();

    if (player.start) {
        moveLines();
        moveCar(car);
        if (keys.ArrowUp && player.y > (road.top + 70)) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 75)) {
            player.x += player.speed;
        }
        car.style.top = player.y + 'px';
        car.style.left = player.x + 'px';

        window.requestAnimationFrame(gamePlay);
        player.score++;
        if (player.score >= highest) {
            highest = player.score;
        }
        score.innerHTML = "Your Score: " + player.score + "<br><br>" + "Highest Score: " + highest;
    }
}


//checking if they collide
function Collide(car, enemyCar) {
    aRect = car.getBoundingClientRect();
    bRect = enemyCar.getBoundingClientRect();

    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}
//end the game
function endGame() {
    player.start = false;
    startbtn.classList.remove('hide');
    console.log("The game had ended");
    gameLevel();
}