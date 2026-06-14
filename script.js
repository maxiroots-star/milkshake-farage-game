const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const message = document.getElementById("message");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

let score = 0;
let seconds = 30;
let gameOver = false;

milkshake.draggable = true;

/* MOVE CHARACTER */
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const x = Math.random() * 450;
    const y = Math.random() * 250;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* TIMER */
const countdown = setInterval(() => {

    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {

        gameOver = true;

        clearInterval(countdown);
        clearInterval(moveCharacter);

        message.textContent = "Game Over! Score: " + score;
    }

}, 1000);

/* DRAG */
milkshake.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", "milkshake");
});

/* DROP */
character.addEventListener("dragover", (event) => {
    event.preventDefault();
});

character.addEventListener("drop", (event) => {

    event.preventDefault();

    if (gameOver) return;

    score++;
    scoreDisplay.textContent = "Score: " + score;

    character.src = "images/crying-character.png";
    message.textContent = "Nice one!";

    setTimeout(() => {
        character.src = "images/character.png";
    }, 500);

});
