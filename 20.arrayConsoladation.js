// --- Directions
// consolidate an array of ints.
// Consolidating this array consists of the following:
// - All instances of 0 need to be moved to the end of the array.
// - There should be no 0s between the non-zero integers.
// - All non-zero indices should retain their order.
//  --- Examples:
// [1, 0 , 5 , 8, 0, 20, 0, 14 ] => [1, 5, 8, 20, 14, 0, 0, 0]
// [0, 5, 3, 4, 0, 94, 0, 20, 0, 41, 20] => [5, 3, 4, 94, 20, 41, 20, 0, 0, 0, 0]
// [0 6 7 15 0 19 0 4 0 45] => [6, 7, 15, 19, 4, 45, 0, 0, 0, 0]

function arrayConsoladation(arr) {
  let intArr = [];
  let counter = 0;
  while (arr[counter] !== undefined) {
    let integer = arr[counter];
    if (arr[counter] !== 0) {
      let index = arr.indexOf(integer);
      intArr.push(...arr.splice(index, 1));
      counter = 0;
    }
    counter++;
  }

  let consolidatedArray = [...intArr, ...arr];
  console.log(consolidatedArray);
}

let testArr = [0, 6, 7, 15, 0, 19, 0, 4, 0, 45];

arrayConsoladation(testArr);
