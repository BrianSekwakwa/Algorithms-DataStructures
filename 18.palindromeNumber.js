var isPalindrome = function(x) {
  let intStr = String(x);
  let intArr = intStr.split("");
  let revStr = intArr.reverse().join("");

  if (revStr === intStr) {
    return true;
  }

  return false;
};
