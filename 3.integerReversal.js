// --- Directions 
// Given an integer, return an integer that
// is the reverse ordering of numbers.
// --- Examples: 
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5 
// reverseInt(-15) === -51
// reverseInt(-90) === -9


// Solution 1

function reverseInt(num) {
  let numString = num.toString();
  let reverseNumStr = '';
  let reverseInteger = '';
  
  if (numString.includes('-')) {

    for (let i = numString.length - 1; i >= 1; i--) {
      reverseNumStr += numString[i];
    }
    reverseNumStr = '-' + reverseNumStr;
    reverseInteger = Number(reverseNumStr);
    console.log(reverseInteger);

  } else {

    for (let i = numString.length - 1; i >= 0; i--) {
      reverseNumStr += numString[i];
    }

    reverseInteger = Number(reverseNumStr);
    console.log(reverseInteger);
  }
} 

reverseInt(-90);

// Solution 2

function reverseInteger (num) {
  
  let reverseNumToString = num.toString().split('').reverse().join('');
  let reverseInt = parseInt(reverseNumToString);
  console.log(reverseInt * Math.sign(num));

}

reverseInteger(-90);