// Problem

// Write a function called maxSubArraySum which accepts an
// array of intergers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
// in the array.

// Examples

// maxSubArraySum([1,2,5,2,8,1,5], 2) => 10
// maxSubArraySum([1,2,5,2,8,1,5], 4) => 17
// maxSubArraySum([4,2,1,6], 1) => 6
// maxSubArraySum([4,2,1,6,2], 4) => 13
// maxSubArraySum([], 4) => null

function maxSubArraySum(arr, num) {
  let temp = 0;
  let maxSum = 0;

  // checking to see if the array is empty or less than limit
  if (arr.length < num) {
    return null;
  }

  // Finding the first few numbers
  for (let i = 0; i < num; i++) {
    temp += arr[i];
  }

  maxSum = temp;

  // subtracting the previous element and then adding the next element
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];

    if (temp > maxSum) {
      maxSum = temp;
    }
  }

  console.log(maxSum);
}

maxSubArraySum([], 4);
