var age = prompt("What is your age");

if (age < 18) {
  alert("You can not enter");
} else if (age > 18 && age < 21) {
  alert("You can enter, but can not drink");
} else {
  alert("You can enter");
}