var str = "hello";

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}



for (var i = -10; i < 19; i++) {
  console.log("numbers " + i);
}

for (var i = 10; i < 40; i++) {
  if (i % 2 == 0) {
    console.log("numbers " + i);
  }
}

for (var i = 300; i < 330; i++) {
  if (!(i % 2 == 0)) {
    console.log("numbers " + i);
  }
}

for (var i = 5; i < 50; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("numbers " + i);
  }
}