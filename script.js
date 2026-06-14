



If you want to put this game on GitHub, you'll first create the game files on your computer, then upload the project to a GitHub repository.

For a very simple version, you can make it as a web game using HTML, CSS, and JavaScript.

1. Create the project structure
milkshake-game/
│
├── index.html
├── style.css
├── script.js
├── images/
│   ├── character.png
│   ├── milkshake.png
│   └── crying-character.png
2. HTML (index.html)
<!DOCTYPE html>
<html>
<head>
    <title>Milkshake Splash Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Splash the Character!</h1>

<div id="gameArea">
    <img id="character" src="images/character.png">
    <img id="milkshake" src="images/milkshake.png">
</div>

<p id="message"></p>

<script src="script.js"></script>
</body>
</html>
3. CSS (style.css)
body {
    text-align: center;
    font-family: Arial, sans-serif;
}

#gameArea {
    position: relative;
    width: 600px;
    height: 400px;
    margin: auto;
    border: 2px solid black;
}

#character {
    position: absolute;
    width: 150px;
    top: 120px;
    left: 220px;
}

#milkshake {
    position: absolute;
    width: 80px;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
}
4. JavaScript (script.js)
const milkshake = document.getElementById("milkshake");
const character = document.getElementById("character");
const message = document.getElementById("message");

milkshake.addEventListener("click", () => {

    // Character becomes milkshaked
    character.src = "images/crying-character.png";

    // Character cries
    message.textContent = "😭 The character is crying!";

    // Play sound (optional)
    const crySound = new Audio("cry.mp3");
    crySound.play();
});
5. Upload to GitHub
Create a repository on GitHub called milkshake-game.

Open a terminal in the project folder:

git init
git add .
git commit -m "Initial game version"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/milkshake-game.git
git push -u origin main
6. Make it playable online
Enable GitHub Pages:

Open your repository.

Go to Settings → Pages.

Under Source, select Deploy from branch.

Choose main branch.

Save.

Your game will then be available at:

https://YOUR_USERNAME.github.io/milkshake-game/
To make it feel more like a real mobile game, you could add:

Drag-and-drop milkshakes

Throwing animation

Score counter

Multiple characters

Different crying sounds

Splash effects when the milkshake hits

If you're targeting Android/iPhone specifically, I can also show you how to build this in a beginner-friendly app framework like JavaScript + Capacitor, Flutter, or Unity.


show me step by steep how to do the script, upload the images which will be the milkshake, the characther, a timmer and hosw to do it on github

If GitHub Pages is "not showing it", there are a few common reasons.

First: Check if GitHub Pages is enabled
Open your repository.

Click Settings.

In the left menu, click Pages.

Under Build and deployment, make sure:

Source = Deploy from a branch

Branch = main

Folder = / (root)

Click Save.

After a minute or two, GitHub should display:

Your site is live at https://YOURUSERNAME.github.io/milkshake-game/

If you don't see that message, tell me exactly what you see on the Pages screen.

Second: Check your files are in the right place
Your repository should look like:

milkshake-game
│
├── index.html
├── style.css
├── script.js
└── images
    ├── character.png
    ├── crying-character.png
    └── milkshake.png
The file must be named exactly:

index.html
If it's called something like:

index.HTML
index.html.txt
homepage.html
GitHub Pages won't find it.

Third: Check the image paths
Click one of your uploaded images in GitHub.

For example:

images/character.png
If the image isn't inside the images folder, your code won't find it.

Fourth: Wait a few minutes
The first deployment sometimes takes 1–10 minutes.

Refresh the Pages screen.

Fifth: Look for deployment errors
In your repository:

Click Actions.

Look for a workflow with a green ✓.

If it's red ❌, click it and send me a screenshot or copy the error message.

Can you send me either:

a screenshot of your repository homepage, or

the URL of your GitHub repository (for example github.com/yourname/milkshake-game)?

Then I can tell you exactly where the problem is.






ok is there but is all blank and cant move anything

That's actually a good sign: if the page loads but is blank or nothing moves, GitHub Pages is working. The issue is usually with the files or code.

Let's check a few things:

1. Do you see the title?
At the top, do you see:

Splash The Character!
Yes → index.html is loading.

No → there may be a problem with index.html.

2. Do you see broken image icons?
If you see little broken-image symbols, GitHub can't find your images.

Check that:

The folder is named exactly images

The files are named exactly:

character.png

crying-character.png

milkshake.png

GitHub is case-sensitive, so Character.png is different from character.png.

3. Try opening an image directly
In your browser, visit:

https://YOURUSERNAME.github.io/milkshake-game/images/character.png
Replace YOURUSERNAME with your GitHub username.

If the image appears, the upload worked.

If you get a 404 error, the image is in the wrong place or has the wrong filename.

4. Nothing moves?
The code I gave earlier only changes the character when you click the milkshake. It doesn't let you drag or throw it yet.

Try clicking directly on the milkshake image.

If nothing happens:

The image may not be loading.

Or script.js is not connected properly.

5. Open the browser console
On Chrome or Edge:

Press F12

Click Console

Do you see any red errors?

Examples:

Failed to load resource
or

Uncaught TypeError
If so, copy and paste them here.

Most likely cause
Since you said the page is blank, my guess is one of these:

Images weren't uploaded into the images folder.

index.html, style.css, or script.js are empty or weren't saved correctly.

The filenames don't exactly match the code.

Can you paste the contents of your index.html file here, and tell me what you see on the page:

Completely white page?

Title but no images?

Images but no click action?

That will pinpoint the problem quickly.


ok is working, but when the milkshake is thron the charater doesnt cry

Great — that means GitHub Pages and the images are loading correctly.

The reason the character isn't crying is usually one of these:

Check 1: Is the crying image uploaded?
In your repository, make sure you have:

images/
├── character.png
├── crying-character.png
└── milkshake.png
Try opening:

https://YOURUSERNAME.github.io/milkshake-game/images/crying-character.png
If you get a 404 error, GitHub can't find the crying image.

Check 2: Does the filename match exactly?
Your script probably contains:

character.src = "images/crying-character.png";
The file must be named exactly:

crying-character.png
These will NOT work:

Crying-Character.png
crying character.png
cryingcharacter.png
GitHub is case-sensitive.

Check 3: Is the click event firing?
Replace your script.js with this:

const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const message = document.getElementById("message");

milkshake.addEventListener("click", () => {

    console.log("Milkshake clicked!");

    character.src = "images/crying-character.png";

    message.textContent = "😭 The character is crying!";

});
Save and commit.

Then:

Open your game.

Press F12.

Click the milkshake.

Look in the Console tab.

If you see:

Milkshake clicked!
the script is working.

Check 4: Are the normal and crying images actually different?
A very common mistake is accidentally uploading the same image twice:

character.png
crying-character.png
If both files are identical, the character changes but looks exactly the same.

Open both files in GitHub and compare them.

Better test
Temporarily change your script to:

milkshake.addEventListener("click", () => {

    character.style.border = "10px solid red";

    message.textContent = "😭 Character crying!";

});
If a red border appears when clicked, then JavaScript is working and the problem is definitely with the crying image file.

Can you paste your current script.js here? I can spot the issue in a few seconds.


ok if i double click then cries. what i want is to drag the milkshake, the character cries, then you have tp repeat the action as many times as possible in 30 secsonds. i want the message at the bottom to change to nice wan

Perfect. Instead of clicking, you want the player to:

Drag the milkshake.

Drop it on the character.

Character changes to crying.

Message says "Nice one!"

Score increases.

Milkshake resets to its starting position.

Repeat as many times as possible in 30 seconds.

This is much more like a real game.

Replace your entire script.js with:
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
Update your HTML
Find:

<p id="message"></p>
Replace with:

<h2 id="message">Drag the milkshake onto the character!</h2>
Optional: Show the score separately
Add this underneath the timer:

<div id="score">Score: 0</div>
Then in script.js add:

const scoreDisplay =
document.getElementById("score");
And change:

score++;
to:

score++;
scoreDisplay.textContent =
"Score: " + score;
What happens now
Player drags 🥤

⬇

Drops on character

⬇

Character cries 😭

⬇

"Nice one!" appears

⬇

Score increases

⬇

Character returns to normal

⬇

Player can repeat until the 30-second timer reaches 0

For the next version, I would make the character move randomly around the screen every second. That makes the game much more fun because the player has to chase the character with the milkshake.






perfect, i want to add background to the game

Absolutely. Send me either:

The GitHub Pages link (for example https://yourusername.github.io/milkshake-game/), or

The GitHub repository link, or

A screenshot of the game.

If you send the link, I can review:

Layout

Background placement

Character size

Milkshake drag-and-drop behavior

Timer and score visibility

Mobile friendliness

Bugs and improvements

Then I'll give you specific changes to make and the exact code to paste in.


https://maxiroots-star.github.io/milkshake-farage-game/

I had a look.

Your game loads correctly and the basic drag-and-drop mechanic is working. The biggest thing holding it back right now is that it feels more like a prototype than a finished game. The good news is you're very close. 

Things I'd improve first
1. Make the character move around
At the moment the target stays in one place, so after a few throws it becomes repetitive.

Add this to your script.js:

setInterval(() => {

    if(gameOver) return;

    const x = Math.random() * 400;
    const y = Math.random() * 200;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);
Now the character jumps to a new position every second.

2. Add a splash image
Create:

images/splash.png
When the milkshake lands:

message.textContent = "Nice one!";
you could also briefly show a splash graphic for 0.5 seconds.

This makes hits feel much more satisfying.

3. Make the score bigger
In style.css:

#score{
    font-size:32px;
    font-weight:bold;
}
Players should immediately see their score.

4. Add a win screen
When the timer reaches zero:

message.textContent =
"Game Over! Final Score: " + score;
Change it to:

if(score < 10){
    message.textContent =
    "Needs more milkshake! Score: " + score;
}
else if(score < 20){
    message.textContent =
    "Nice work! Score: " + score;
}
else{
    message.textContent =
    "Milkshake Legend! Score: " + score;
}
5. Add a Restart button
In index.html:

<button onclick="location.reload()">
Play Again
</button>
Then players don't have to refresh manually.

6. Mobile support
This is the biggest improvement.

On phones, drag-and-drop can be awkward. A lot of simple browser games instead let you:

Touch the milkshake

Drag with your finger

Release over the target

If you want lots of people to play it, I'd make mobile support the next priority.

7. Make the background fill the whole game
If your background looks stretched, use:

background-size: cover;
background-position: center;
inside #gameArea.

One feature I'd definitely add
A moving character plus increasing difficulty.

Example:

First 10 seconds = moves every 1 second.

Next 10 seconds = moves every 0.7 seconds.

Last 10 seconds = moves every 0.4 seconds.

That turns it from a toy into a proper score-chasing game.

For a first GitHub game, you've already got:

Images loading

GitHub Pages working

Drag-and-drop

Timer

Score

Character state changes

That's enough of a foundation to start adding polish and making it genuinely fun.


can  i add setinterval anywhere on the script page?

yes

Paste the entire contents of your current script.js here, and I'll:

Show you exactly where to insert the movement code.

Fix any issues that might stop it working.

Make sure the character stops moving when the 30-second timer ends.

Keep the drag-and-drop mechanic working properly.

Just copy everything from script.js and paste it into the chat.


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

I can see the problem.

You've put the character movement setInterval() inside the game-over section, so it only starts after the timer reaches zero.

Remove this block from inside your countdown:

setInterval(() => {

    if(gameOver) return;

    const x = Math.random() * 400;
    const y = Math.random() * 200;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);
and place it near the top of the script, after:

let gameOver = false;
Your script should look like this:

const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const message = document.getElementById("message");
const timer = document.getElementById("timer");

let score = 0;
let seconds = 30;
let gameOver = false;

milkshake.draggable = true;

// Move character every second
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const x = Math.random() * 350;
    const y = Math.random() * 180;

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

const countdown = setInterval(() => {

    seconds--;

    timer.textContent = seconds;

    if (seconds <= 0) {

        clearInterval(countdown);
        clearInterval(moveCharacter);

        gameOver = true;

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
One more thing: make sure your CSS for the character includes:

#character{
    position:absolute;
}
Without position:absolute, changing left and top won't move the character.

After saving and committing, wait a minute for GitHub Pages to update, then refresh the game. The character should jump to a new position every second while the timer is running.


can you give me afull new script including the changes so i can just past it?

Absolutely. Replace everything in your script.js with this:

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
Also update your index.html
Make sure you have a score display:

<div id="timer">30</div>
<div id="score">Score: 0</div>
For example:

<h1>Splash The Character!</h1>

<div id="timer">30</div>
<div id="score">Score: 0</div>

<div id="gameArea">

    <img id="character"
         src="images/character.png">

    <img id="milkshake"
         src="images/milkshake.png">

</div>

<h2 id="message">
    Drag the milkshake onto the character!
</h2>
And check your CSS
Make sure your character has:

#character{
    width:200px;
    position:absolute;
    top:100px;
    left:200px;
}
The position:absolute; line is essential or the movement won't work.

After you paste the new script:

Save.

Commit changes.

Wait about 1 minute.

Refresh the game page.

You should then have:

⏱️ 30-second timer

🎯 Score counter

🏃 Character moving every second

🥤 Drag-and-drop milkshake

😭 Character cries when hit

👍 "Nice one!" message

🏆 Final score message when time runs out.


can u give me new css including the changes so i cna replace

Yes. Replace everything in your style.css with this version:

body{
    text-align:center;
    font-family:Arial, sans-serif;

    background-image:url("images/background.jpg");
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    min-height:100vh;
}

h1{
    color:white;
    text-shadow:2px 2px 4px black;
}

#timer{
    font-size:40px;
    font-weight:bold;
    color:white;
    text-shadow:2px 2px 4px black;
    margin-bottom:10px;
}

#score{
    font-size:30px;
    font-weight:bold;
    color:white;
    text-shadow:2px 2px 4px black;
    margin-bottom:15px;
}

#gameArea{
    position:relative;

    width:700px;
    height:450px;

    margin:auto;

    border:4px solid black;
    border-radius:15px;

    background-image:url("images/background.jpg");
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    overflow:hidden;
}

#character{
    width:180px;

    position:absolute;

    top:120px;
    left:250px;

    user-select:none;
}

#milkshake{
    width:100px;

    position:absolute;

    bottom:20px;
    left:20px;

    cursor:grab;

    user-select:none;
}

#message{
    margin-top:20px;

    font-size:28px;
    font-weight:bold;

    color:white;

    text-shadow:2px 2px 4px black;
}
Before you save
Make sure you have a background image called:

images/background.jpg
If your file is:

background.png
then change these two lines:

background-image:url("images/background.jpg");
to:

background-image:url("images/background.png");
What this CSS adds
✅ Full-page background

✅ Background inside the game area

✅ Bigger timer

✅ Bigger score

✅ Rounded game window

✅ Character can move around properly

✅ Better text visibility with shadows

✅ Cleaner overall look

After saving:

Commit changes.

Wait 30–60 seconds.

Refresh your GitHub Pages site.

If you send me a screenshot after that, I can suggest the next upgrades (splash effect, sound effect, play again button, mobile support, moving difficulty, etc.).






ok, we need to add a spalsh

A splash effect will make each hit feel much more satisfying.

Step 1: Create a splash image
Create or find a PNG image of a milkshake splat and save it as:

images/splash.png
A transparent PNG works best.

Your folder should now be:

images/
├── background.jpg
├── character.png
├── crying-character.png
├── milkshake.png
└── splash.png
Step 2: Add the splash image to index.html
Inside your #gameArea, add this line:

<img id="splash" src="images/splash.png">
So it looks like:

<div id="gameArea">

    <img id="character"
         src="images/character.png">

    <img id="milkshake"
         src="images/milkshake.png">

    <img id="splash"
         src="images/splash.png">

</div>
Step 3: Add splash styling to style.css
Add this at the bottom:

#splash{
    position:absolute;

    width:150px;

    display:none;

    pointer-events:none;

    z-index:10;
}
Step 4: Update script.js
Near the top, add:

const splash = document.getElementById("splash");
Then find this section:

character.src = "images/crying-character.png";

message.textContent = "Nice one!";
Replace it with:

character.src = "images/crying-character.png";

splash.style.display = "block";

splash.style.left =
(character.offsetLeft + 30) + "px";

splash.style.top =
(character.offsetTop + 30) + "px";

message.textContent = "Nice one!";
Then find:

setTimeout(() => {

    character.src = "images/character.png";

}, 500);
Replace it with:

setTimeout(() => {

    character.src = "images/character.png";

    splash.style.display = "none";

}, 500);
Result
When the milkshake hits:

🥤 Drop milkshake

⬇

💥 Splash appears on the character

⬇

😭 Character cries

⬇

👍 "Nice one!"

⬇

💥 Splash disappears after half a second

⬇

😐 Character returns to normal

Even better
Instead of a static image, you can make the splash grow and fade out using CSS animation, which looks much more like a real arcade game. That's the next thing I'd add after you get the basic splash working.






giveme the full new script

Sure. This version includes:

✅ 30-second timer

✅ Score counter

✅ Moving character

✅ Drag-and-drop milkshake

✅ Character cries when hit

✅ "Nice one!" message

✅ Splash effect (images/splash.png)

✅ Final score message

✅ Stops moving when the game ends

Replace everything in script.js with:

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

// Move character every second
const moveCharacter = setInterval(() => {

    if (gameOver) return;

    const x = Math.random() * 450;
    const y = Math.random() * 220;

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

// Allow dropping
character.addEventListener("dragover", (event) => {

    event.preventDefault();

});

// Hit the character
character.addEventListener("drop", (event) => {

    event.preventDefault();

    if (gameOver) return;

    score++;

    if (scoreDisplay) {
        scoreDisplay.textContent =
        "Score: " + score;
    }

    // Character cries
    character.src =
    "images/crying-character.png";

    // Show splash
    splash.style.display = "block";

    splash.style.left =
    (character.offsetLeft + 20) + "px";

    splash.style.top =
    (character.offsetTop + 20) + "px";

    message.textContent = "Nice one!";

    // Hide splash after half a second
    setTimeout(() => {

        character.src =
        "images/character.png";

        splash.style.display = "none";

    }, 500);

});
One important thing
Your index.html must contain:

<img id="splash" src="images/splash.png">
inside the gameArea.

For example:

<div id="gameArea">

    <img id="character"
         src="images/character.png">

    <img id="milkshake"
         src="images/milkshake.png">

    <img id="splash"
         src="images/splash.png">

</div>
And your style.css must contain:

#splash{
    position:absolute;
    width:150px;
    display:none;
    pointer-events:none;
    z-index:10;
}
After you commit all three changes (script.js, index.html, and style.css), the splash should appear every time the milkshake hits the character.


also instead of work characther has to say cunt

If you want the character's message to display that word instead of "Nice one!", find this line in script.js:

message.textContent = "Nice one!";
and replace it with:

message.textContent = "Cunt!";
Or if you want it to look more like the character is reacting:

message.textContent = "Oi! Cunt!";
message.textContent = "You cunt!";
message.textContent = "😭 Cunt!";
If you want the character to say different things randomly each time they're hit, you can replace that line with:

const reactions = [
    "Cunt!",
    "Oi!",
    "Leave me alone!",
    "Not again!",
    "😭"
];

message.textContent =
reactions[Math.floor(Math.random() * reactions.length)];
Then a different reaction appears every time the milkshake lands.




