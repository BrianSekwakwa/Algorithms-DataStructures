// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4]]

function chunk(array, size) {
  
  const chunked = [];

  array.forEach(element => {
    
    const last = chunked[chunked.length - 1]
    
    if (!last || last.length === size) {
      chunked.push([element]);  
    } else {
      last.push(element);
    }
  });

  console.log(chunked);
  
}

let Arr = [1,2,3,4,5];
let chunkSize = 2;

chunk(Arr, chunkSize);
