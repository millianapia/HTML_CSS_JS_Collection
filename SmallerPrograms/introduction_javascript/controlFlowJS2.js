var count = -10;

while (count < 19) {
  console.log("Count is " + count);
  count++;
}

var even = 10;

while (even < 41) {
  if (even % 2 == 0) {
    console.log("Count is " + even);
  }
  even++;
}

var odd = 300;

while (odd < 333) {
  if (!(odd % 2 == 0)) {
    console.log("Count is " + odd);
  }
  odd++;
}

var divisible = 5;

while (divisible < 50) {
  if (divisible % 5 == 0 && divisible % 3 == 0) {
    console.log("Count is " + divisible);

  }
  divisible++;
}