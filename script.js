const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const message = document.getElementById("message");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

let score = 0;
let seconds = 30;
let gameOver = false;

milkshake.draggable = true;

/* -------------------------
   MOVE CHARACTER
------------------------- */
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const x = Math.random() * 450;
    const y = Math.random() * 250;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* -------------------------
   TIMER
------------------------- */
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

/* -------------------------
   DRAG START (MILKSHAKE)
------------------------- */
milkshake.addEventListener("dragstart", (event) => {

    if (gameOver) return;

    event.dataTransfer.setData("text/plain", "milkshake");
});

/* -------------------------
   ALLOW DROP ON CHARACTER
------------------------- */
character.addEventListener("dragover", (event) => {
    event.preventDefault();
});

/* -------------------------
   DROP HIT
------------------------- */
character.addEventListener("drop", (event) => {

    event.preventDefault();

    if (gameOver) return;

    score++;
    scoreDisplay.textContent = "Score: " + score;

    /* CRY */
    character.src = "images/crying-character.png";

    /* SPLASH POSITION (IMPORTANT FIX) */
    const rect = character.getBoundingClientRect();

    splash.style.display = "block";
    splash.style.left = rect.left + "px";
    splash.style.top = rect.top + "px";

    message.textContent = "Nice one!";

    setTimeout(() => {

        character.src = "images/character.png";
        splash.style.display = "none";

    }, 500);

});
