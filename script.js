const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const message = document.getElementById("message");
const timer = document.getElementById("timer");

let score = 0;
let seconds = 30;
let gameOver = false;

milkshake.draggable = true;

const countdown = setInterval(() => {

    seconds--;

    timer.textContent = seconds;

    if (seconds <= 0) {

        clearInterval(countdown);

        gameOver = true;
        setInterval(() => {

    if(gameOver) return;

    const x = Math.random() * 400;
    const y = Math.random() * 200;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

        message.textContent =
        "Game Over! Score: " + score;

    }

}, 1000);

milkshake.addEventListener("dragstart", (event) => {

    event.dataTransfer.setData("text", "milkshake");

});

character.addEventListener("dragover", (event) => {

    event.preventDefault();

});

character.addEventListener("drop", (event) => {

    event.preventDefault();

    if (gameOver) return;

    score++;

    character.src =
    "images/crying-character.png";

    message.textContent =
    "Nice one! Score: " + score;

    setTimeout(() => {

        character.src =
        "images/character.png";

    }, 500);

});
