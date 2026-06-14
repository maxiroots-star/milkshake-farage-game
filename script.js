const character =
document.getElementById("character");

const milkshake =
document.getElementById("milkshake");

const message =
document.getElementById("message");

const timer =
document.getElementById("timer");

let seconds = 30;

const countdown =
setInterval(() => {

seconds--;

timer.textContent = seconds;

if(seconds <= 0){

clearInterval(countdown);

message.textContent =
"Game Over";

}

},1000);

milkshake.addEventListener("click",()=>{

character.src =
"images/crying-character.png";

message.textContent =
"😭 Character crying!";

});
