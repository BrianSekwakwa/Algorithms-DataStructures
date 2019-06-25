// Problem

// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the letters
// of another, such as cinema, formed from iceman.

// Examples
// validAnagram("app", "paa") - true
// validAnagram("anagram", "nagaram") - true
// validAnagram("rat", "car") - false
// validAnagram("apple", "aple") - false
// validAnagram("qwerty", "qeytwr") - true

function validAnagram(str1, str2) {
  strObj1 = {};
  strObj2 = {};

  if (str1.length !== str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (strObj1[str1[i]]) {
        strObj1[str1[i]] += 1;
      } else {
        strObj1[str1[i]] = 1;
      }
    }

    for (let i = 0; i < str2.length; i++) {
      if (strObj2[str2[i]]) {
        strObj2[str2[i]] += 1;
      } else {
        strObj2[str2[i]] = 1;
      }
    }

    for (const key in strObj1) {
      if (!(key in strObj2)) {
        return false;
      }
      if (strObj2[key] !== strObj1[key]) {
        return false;
      }
    }
    console.log("valid anagram");
  }
}

validAnagram("cinema", "iceman");
