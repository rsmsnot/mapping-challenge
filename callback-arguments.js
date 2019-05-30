// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  arr.forEach((arr, index) => {
    // console.log(index);
    if (arr === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Winston","Waldo"], actionWhenFound);