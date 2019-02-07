var quit = false;
var todo = [];
while (!quit) {
  var what = prompt("What would you like to do");
  if (what === "new") {
    var addList = prompt("What would you like to add");
    todo.push(addList)
  } else if (what === "list") {
    console.log("********");
    todo.forEach(function(todo, i) {
      console.log(i + " : " + todo);
    })
    console.log("********");

  } else if (what === "quit") {
    quit = true;
  } else if (what === "delete") {
    var index = prompt("Enter number to delete");
    todo.splice(index, 1);
  }
}