const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

const bgmusic = document.getElementById("bgmusic");

let score = 0;
let seconds = 30;
let gameOver = false;

let milkshakeSelected = false;
let musicStarted = false;

/* ---------------- TIMER ---------------- */
function startTimer() {

    const countdown = setInterval(() => {

        // 🎵 START MUSIC ON FIRST TICK (mobile-safe)
        if (!musicStarted) {
            bgmusic.volume = 0.4;
            bgmusic.play().catch(() => {});
            musicStarted = true;
        }

        seconds--;
        timerEl.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(countdown);
            gameOver = true;
            message.textContent = "Game Over! Score: " + score;
        }

    }, 1000);
}

/* ---------------- MOVE CHARACTER ---------------- */
setInterval(() => {

    if (gameOver) return;

    const area = document.getElementById("gameArea").getBoundingClientRect();

    const x = Math.random() * (area.width - 140);
    const y = Math.random() * (area.height - 140);

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* ---------------- START GAME ON FIRST TAP ---------------- */
document.body.addEventListener("click", () => {

    startTimer(); // starts timer ONLY once
}, { once: true });

/* ---------------- MILKSHAKE SELECT ---------------- */
milkshake.addEventListener("click", () => {

    if (gameOver) return;

    milkshakeSelected = true;
    milkshake.style.transform = "scale(1.2)";
    message.textContent = "Now tap character!";
});

/* ---------------- HIT ---------------- */
character.addEventListener("click", () => {

    if (gameOver || !milkshakeSelected) return;

    milkshakeSelected = false;
    milkshake.style.transform = "scale(1)";

    score++;
    scoreEl.textContent = "Score: " + score;

    character.src = "images/crying-character.png";

    const rect = character.getBoundingClientRect();
    const gameRect = document.getElementById("gameArea").getBoundingClientRect();

    splash.style.display = "block";
    splash.style.left = (rect.left - gameRect.left) + "px";
    splash.style.top = (rect.top - gameRect.top) + "px";

    setTimeout(() => {
        character.src = "images/character.png";
        splash.style.display = "none";
    }, 500);
});
