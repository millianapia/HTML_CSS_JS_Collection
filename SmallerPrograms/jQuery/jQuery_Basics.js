// selecting h1
console.log($("h1"));

//retrieving a tag inside ul and li
console.log($("ul li a"));

// retrieving all a tags
console.log($("a"));

// css
$("h1").css("color", "yellow");

// pass inn styles
var styles = {
  color: "red",
  background: "pink",
  border: "2px solid purple"
}
$("h1").css("styles")

$("li").css("color", "blue");

$("a").css({
  color: "pink",
  background: "blue"
});