// Problem

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
  let tempProduct;
  let maxProdcuct;

  for (let i = 0; i <= inputArray.length - 2; i++) {
    let j = i + 1;

    tempProduct = inputArray[i] * inputArray[j];

    if (tempProduct > maxProdcuct || maxProdcuct === undefined) {
      maxProdcuct = tempProduct;
    }
  }

  console.log(maxProdcuct);
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
