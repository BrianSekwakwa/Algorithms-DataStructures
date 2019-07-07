// PROBLEM

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// EXAMPLE

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
  let numberOfStatues = 0;
  let itemObjects = {};
  let sortedArr = [];
  let isFinished = false;
  let currPointer = 0;
  let nextPointer = 1;

  // Sorting the given array
  while (isFinished === false) {
    if (statues.length === 0) {
      isFinished = true;
    } else {
      if (statues[nextPointer] === undefined) {
        sortedArr.push(statues[currPointer]);
        statues.splice(currPointer, 1);
        currPointer = 0;
        nextPointer = 1;
      } else {
        if (statues[currPointer] < statues[nextPointer]) {
          nextPointer++;
        } else {
          currPointer = nextPointer;
          nextPointer++;
        }
      }
    }
  }

  let current = sortedArr[0];
  let last = sortedArr[sortedArr.length - 1];

  if (statues.length === 1) {
    console.log(0);
  } else {
    for (const item of sortedArr) {
      itemObjects[`${item}`] = 1;
    }
    for (let i = current; i <= last; i++) {
      if (!itemObjects[`${i}`]) {
        numberOfStatues += 1;
      }
    }
    console.log(numberOfStatues);
  }
}

makeArrayConsecutive2([4, 2, 7, 18]);
