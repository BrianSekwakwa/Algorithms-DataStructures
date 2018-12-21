// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abccccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strObject = {};
  let maxCharacter = 0;
  let char = '';

  const strArray = str.split('');
  
  strArray.forEach(char => {
    if (strObject[char]) {
      strObject[char]++;
    } else {
      strObject[char] = 1;
    }
  });

  for (const key in strObject) {
    if (strObject[key] > maxCharacter) {
      maxCharacter = strObject[key]
      char = key;
    }
  }

  console.log(char);
  
}

maxChar("abcccccccccccd")