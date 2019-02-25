// works in console
document.querySelector("h1").addEventListener("click", function() {
  console.log("you clicked me");
})



white = true;
var push = document.querySelector("button")
push.addEventListener("click", function() {

  if (white) {
    document.bgColor = "white";
    white = false;
  } else {
    document.bgColor = "purple";
    white = true;
  }
});


// vs

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});