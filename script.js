const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const message = document.getElementById("message");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

let score = 0;
let seconds = 30;
let gameOver = false;

let milkshakeSelected = false;

/* ----------------------------
   MOVE CHARACTER
---------------------------- */
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const x = Math.random() * 450;
    const y = Math.random() * 250;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* ----------------------------
   TIMER
---------------------------- */
const countdown = setInterval(() => {

    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {

        gameOver = true;

        clearInterval(countdown);
        clearInterval(moveCharacter);

        if (score < 10) {
            message.textContent = "Needs more milkshakes! Score: " + score;
        } else if (score < 20) {
            message.textContent = "Nice job! Score: " + score;
        } else {
            message.textContent = "Milkshake legend! Score: " + score;
        }
    }

}, 1000);

/* ----------------------------
   SELECT MILKSHAKE (TOUCH/CLICK)
---------------------------- */
milkshake.addEventListener("click", () => {

    if (gameOver) return;

    milkshakeSelected = true;

    message.textContent = "Now tap the character!";

    milkshake.style.transform = "scale(1.2)";
});

/* ----------------------------
   HIT CHARACTER
---------------------------- */
character.addEventListener("click", () => {

    if (gameOver) return;
    if (!milkshakeSelected) return;

    milkshakeSelected = false;
    milkshake.style.transform = "scale(1)";

    score++;
    scoreDisplay.textContent = "Score: " + score;

    // Cry
    character.src = "images/crying-character.png";

    // Splash position
    splash.style.display = "block";
    splash.style.left = character.style.left;
    splash.style.top = character.style.top;

    message.textContent = "Nice one!";

    setTimeout(() => {

        character.src = "images/character.png";
        splash.style.display = "none";

    }, 500);

});
