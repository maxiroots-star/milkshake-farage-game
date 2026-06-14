let milkshakeSelected = false;

/* MOBILE + DESKTOP PICK UP */
milkshake.addEventListener("click", () => {

    if (gameOver) return;

    milkshakeSelected = true;
    message.textContent = "Now hit the character!";

    milkshake.style.transform = "scale(1.2)";
});

/* CHARACTER HIT */
character.addEventListener("click", () => {

    if (gameOver) return;
    if (!milkshakeSelected) return;

    milkshakeSelected = false;
    milkshake.style.transform = "scale(1)";

    score++;
    scoreDisplay.textContent = "Score: " + score;

    character.src = "images/crying-character.png";
    message.textContent = "Nice one!";

    splash.style.display = "block";
    splash.style.left = character.style.left;
    splash.style.top = character.style.top;

    setTimeout(() => {
        character.src = "images/character.png";
        splash.style.display = "none";
    }, 500);
});
