// --- Directions
// Given an interger, return a new number
// if the new integer is the same as the given integer return True
// if the new integer is not the same as the given integer return False;
//  --- Examples:
//  1001 => 1001 => true
//  404 => 404 => true
//  140 => 041 => false
var isPalindrome = function (x) {
  let intStr = String(x);
  let intArr = intStr.split("");
  let revStr = intArr.reverse().join("");

  if (revStr === intStr) {
    return true;
  }

  return false;
};

console.log(isPalindrome(4004));
