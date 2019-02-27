var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById('p2');
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var resetButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var input = document.querySelector("input");
var playingTo = input.value;
var winningscoredisplay = document.querySelector("p span");

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score == playingTo) {
      gameOver = true;
      p1Display.style.color = "green";
    }
    p1Display.textContent = p1Score;
  }

});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score == playingTo) {
      gameOver = true;
      p2Display.style.color = "green";

    }
    p2Display.textContent = p2Score;
  }
});


resetButton.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.textContent = p1Score;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  gameOver = false;
});

input.addEventListener("change", function() {
  winningscoredisplay.textContent = input.value;
});