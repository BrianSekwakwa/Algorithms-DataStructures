// Problem

// Implement a function called countUniqueValues, which
// accepts a sorted array, and counts the unique values
// in the array. There can be negative numbers in the array,
// but it will always be sorted.

// Example

// countUniqueValues([1, 1, 1, 1, 1, 2]) => 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) => 7
// countUniqueValues([]) => 0
// countUniqueValues([-2, -1, -1, 0, 1]) => 4

function countUniqueValues(arr) {
  let last = 0;
  let next = 1;
  let uniqueNumberArray = [];

  while (arr[last] !== undefined) {
    if (arr[last] !== arr[next]) {
      uniqueNumberArray.push(arr[last]);
      last = next;
    }
    next++;
  }

  console.log(uniqueNumberArray.length);
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
