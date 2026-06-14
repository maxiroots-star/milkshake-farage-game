document.addEventListener("DOMContentLoaded", () => {

const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");
const gameArea = document.getElementById("gameArea");
const bgmusic = document.getElementById("bgmusic");

if (!character || !milkshake || !timerEl || !scoreEl || !gameArea) {
    console.error("Missing elements in HTML!");
    return;
}

let score = 0;
let seconds = 30;
let gameOver = false;

let milkshakeSelected = false;
let musicStarted = false;

/* ---------------- MUSIC SAFE ---------------- */
function startMusic() {
    if (musicStarted || !bgmusic) return;

    bgmusic.volume = 0.4;

    bgmusic.play()
        .then(() => musicStarted = true)
        .catch(err => console.log("Music blocked:", err));
}

document.body.addEventListener("click", () => {
    startMusic();
}, { once: true });

/* ---------------- TIMER ---------------- */
setInterval(() => {

    if (gameOver) return;

    seconds--;
    timerEl.textContent = seconds;

    if (seconds <= 0) {
        gameOver = true;
        message.textContent = "Game Over! Score: " + score;
    }

}, 1000);

/* ---------------- MOVE CHARACTER ---------------- */
setInterval(() => {

    if (gameOver) return;

    const rect = gameArea.getBoundingClientRect();

    const x = Math.random() * (rect.width - 150);
    const y = Math.random() * (rect.height - 150);

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* ---------------- MILKSHAKE ---------------- */
milkshake.addEventListener("click", () => {

    if (gameOver) return;

    milkshakeSelected = true;
    message.textContent = "Now tap the character!";
});

/* ---------------- HIT ---------------- */
character.addEventListener("click", () => {

    if (gameOver || !milkshakeSelected) return;

    milkshakeSelected = false;

    score++;
    scoreEl.textContent = "Score: " + score;

    if (character) {
        character.src = "images/crying-character.png";
    }

    if (splash) {
        const c = character.getBoundingClientRect();
        const g = gameArea.getBoundingClientRect();

        splash.style.display = "block";
        splash.style.left = (c.left - g.left) + "px";
        splash.style.top = (c.top - g.top) + "px";

        setTimeout(() => splash.style.display = "none", 500);
    }
});

});
