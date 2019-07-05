// Problem

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

function centuryFromYear(year) {
  let yearString = year.toString();
  let yearArr = yearString.split("");
  let copiedArr = [...yearArr];
  let singleDigitCentury = Number(copiedArr[0]);
  let twoDigitCentury = Number(copiedArr.splice(0, 2).join(""));

  if (year <= 100) {
    console.log(1);
  } else {
    if (yearArr.length === 3) {
      if (year % 100 === 0) {
        console.log(year / 100);
      } else {
        console.log(singleDigitCentury + 1);
      }
    } else {
      if (year % 100 === 0) {
        console.log(year / 100);
      } else {
        console.log(twoDigitCentury + 1);
      }
    }
  }
}

centuryFromYear(2019);
