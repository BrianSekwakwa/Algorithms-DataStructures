// --- Directions
// Given a string, return true if the string
// is a Palindrome or false if it is not.
// Palindromes are strings that form the
// same word if it is reversed (spelt backwards)
// *DO* include spaces and punctuation if
// the string is a palidrome or not 
//  --- Examples:
//  "abba" => "abba" => true
//  "madam" => "madam" => true
//  "coffee" => "eeffoc" => false


function palindrome(str) {
  let reverseString = '';

  for (let i = str.length -1; i >= 0; i--) {
    reverseString += str[i];
  }

  if (reverseString === str) {
    console.log('true');
  } else {
    console.log('false');
  }

}

palindrome("madam");