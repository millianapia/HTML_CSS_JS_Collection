// takes a string argument and returns the one element with a matching id
var tag = document.getElementById('highlight')
// returns javascript object highlight

// Takes a string argument and returns a list of elements that  have a matching class
var tags = document.getElementsByClassName("bolded")
console.log(tags[0]);
// returns a list of objects named bolded, item 1 and 2 in this case

// returns a list of all elements of a given tag name
var tags = document.getElementsByTagName('li')
// list javascript elements li

// returns the first element that matches a given css-style selector
var tag = document.querySelector("#highlight")
// or
var tag = document.querySelector(".bolded")
// only returns the first element, if it has more elements.

// retrieves h1, and replaces the element text with new text
var tagText = document.querySelector("h1");
tagText.textContent
tagText.textContent = "new text"
// or better version
tagText.innerHTML
tagText.innerHTML = "new text"

// change link attribute from one link to another
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "www.dogs.com");

// change img attribute from one picture to another
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");