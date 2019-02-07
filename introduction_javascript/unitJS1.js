var number = prompt("Give number");


function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

alert("It is: " + isEven(number));