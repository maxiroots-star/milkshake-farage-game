const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

const bgmusic = document.getElementById("bgmusic");

let score = 0;
let seconds = 30;
let gameOver = false;

let milkshakeSelected = false;
let musicStarted = false;

/* -------------------------
   MOVE CHARACTER (RESPONSIVE)
------------------------- */
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const gameArea = document.getElementById("gameArea");
    const rect = gameArea.getBoundingClientRect();

    const size = 140; // character size approx

    const x = Math.random() * (rect.width - size);
    const y = Math.random() * (rect.height - size);

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* -------------------------
   TIMER + MUSIC START
------------------------- */
const countdown = setInterval(() => {

    // START MUSIC ONCE (mobile safe)
    if (!musicStarted) {
        bgmusic.volume = 0.4;
        bgmusic.play().catch(() => {});
        musicStarted = true;
    }

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
   MOBILE TAP: SELECT MILKSHAKE
------------------------- */
milkshake.addEventListener("click", () => {

    if (gameOver) return;

    milkshakeSelected = true;

    milkshake.style.transform = "scale(1.2)";
    message.textContent = "Now tap the character!";
});

/* -------------------------
   HIT CHARACTER
------------------------- */
character.addEventListener("click", () => {

    if (gameOver) return;
    if (!milkshakeSelected) return;

    milkshakeSelected = false;
    milkshake.style.transform = "scale(1)";

    hit();
});

/* -------------------------
   HIT FUNCTION (CORE GAME LOGIC)
------------------------- */
function hit() {

    score++;
    scoreDisplay.textContent = "Score: " + score;

    // cry image
    character.src = "images/crying-character.png";

    // splash positioning (FIXED)
    const charRect = character.getBoundingClientRect();
    const gameRect = document.getElementById("gameArea").getBoundingClientRect();

    splash.style.display = "block";
    splash.style.left = (charRect.left - gameRect.left) + "px";
    splash.style.top = (charRect.top - gameRect.top) + "px";

    message.textContent = "Nice one!";

    setTimeout(() => {

        character.src = "images/character.png";
        splash.style.display = "none";

    }, 500);
}

/* -------------------------
   SAFETY: UNLOCK AUDIO ON MOBILE
------------------------- */
document.body.addEventListener("click", () => {

    bgmusic.play().catch(() => {});

}, { once: true });
