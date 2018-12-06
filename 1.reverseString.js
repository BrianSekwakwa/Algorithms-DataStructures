//  --- Directions
// Given a string, return a new string with
// the reversed order of characters.
//  --- Examples
//  'apples' => 'selppa'
//  'hello' => 'olleh'
//  'Greetings!' => '!sgniteerG'

// Solution 1

function reverse (str) {
  let reverseString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  console.log(reverseString);
}

reverse('Greetings!');

// Solution 2

function reverseStr (str) {
  let revStrArray = [];
  let strArray = str.split('');

  for (let i = strArray.length - 1; i >= 0; i--) {
    revStrArray.push(strArray[i]);
  }
  
  const reverseString = revStrArray.join('');
  console.log(reverseString);
}

reverseStr("Greetings!");

