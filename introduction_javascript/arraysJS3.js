function printReverse(numbers) {
  for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers.pop());

  }
}
var num = [1, 2, 3, 4, 5];
console.log(printReverse(num));


function isUniform(values) {
  for (var i = 0; i < values.length - 1; i++) {
    if (values[i] !== values[i + 1]) {
      return false;
    }
  }
  return true;
}


console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([1, 2, 1, 1]));


function sum(values) {
  var val = 0;
  for (var i = 0; i < values.length; i++) {
    val += values[i];
  }
  return val;
}


console.log(sum([1, 1, 1, 1]));
console.log(sum([1, 2, 1, 1]));

function max(values) {
  var max = values[0];
  for (var i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i]
    }
  }
  return max;
}

console.log(max([1, 2, 1, 1]));