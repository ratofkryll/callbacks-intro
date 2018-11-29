// The second argument/parameter is expected to be a function
var names = ["Alice", "Bob", "Waldo", "Winston"];
var waldoIndex = 0;

function findWaldo(arr, found) {
  names.forEach(function(name, i) {
    if (name === "Waldo") {
      waldoIndex = i;
      found();   // execute callback
    }
  });
  return waldoIndex;
}

function actionWhenFound() {
  console.log(`Found Waldo at index ${waldoIndex}!`);
}

findWaldo(names, actionWhenFound);
