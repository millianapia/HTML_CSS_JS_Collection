// When you click on a specific element
$("p").click(function() {
  console.log("Clicked");
});

$("button").click(function() {
  alert("Clicked");
});


// When you press down a key
$("input").keypress(function() {
  if (event.which === 13) {
    // code of key pressed = which
    alert("You hit enter");
  }
  console.log("You pressed a key");
});


// on method
$("h1").on("click", function() {
  $("this").css("color", "purple");
});

$("button").on("mouseenter", function() {
  $("this").css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
  $("this").css("font-weight", "bold");
});


// Effects