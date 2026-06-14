const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const message = document.getElementById("message");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

let score = 0;
let seconds = 30;
let gameOver = false;

milkshake.draggable = true;

// Move the character every second
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const x = Math.random() * 350;
    const y = Math.random() * 180;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

// Countdown timer
const countdown = setInterval(() => {

    seconds--;

    timer.textContent = seconds;

    if (seconds <= 0) {

        gameOver = true;

        clearInterval(countdown);
        clearInterval(moveCharacter);

        if (score < 10) {

            message.textContent =
            "Needs more milkshake! Final Score: " + score;

        } else if (score < 20) {

            message.textContent =
            "Nice work! Final Score: " + score;

        } else {

            message.textContent =
            "Milkshake Legend! Final Score: " + score;

        }

    }

}, 1000);

// Start dragging
milkshake.addEventListener("dragstart", (event) => {

    event.dataTransfer.setData("text", "milkshake");

});

// Allow dropping onto character
character.addEventListener("dragover", (event) => {

    event.preventDefault();

});

// Character gets hit
character.addEventListener("drop", (event) => {

    event.preventDefault();

    if (gameOver) return;

    score++;

    if (scoreDisplay) {
        scoreDisplay.textContent = "Score: " + score;
    }

    character.src = "images/crying-character.png";

    message.textContent = "Nice one!";

    setTimeout(() => {

        character.src = "images/character.png";

    }, 500);

});
