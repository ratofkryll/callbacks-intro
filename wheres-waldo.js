// The second argument/parameter is expected to be a function
var waldoIndex = 0;

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      waldoIndex = i;
      found();   // execute callback
    }
  }
  return waldoIndex;
}

function actionWhenFound() {
  console.log(`Found Waldo at index ${waldoIndex}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
