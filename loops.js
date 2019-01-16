function forLoop() {
for (let i = 1; i < 25; i++) {
  console.log("I am ${i} strange loop")
}
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop();
    return array;
  } while (array.length > 0 && incrementVariable())
}