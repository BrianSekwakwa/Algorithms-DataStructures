// --- Directions
// Suppose we want to write a function that calculates the sum of all numbers
// from 1 up until ( and including ) some number n.
// --- Examples
// addUp(5) -->

// Solution 1

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Solution 2

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
