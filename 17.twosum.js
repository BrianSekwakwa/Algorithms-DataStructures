// --- Directions

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// --- Example

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let twoSum = function(nums, target) {
  let i = 0;
  let j = 1;
  let sum;
  let notEqual = true;

  while (notEqual) {
    sum = nums[i] + nums[j];

    if (sum === target) {
      let integers = [i, j];
      return integers;
    } else if (nums[j] === undefined) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 17));
