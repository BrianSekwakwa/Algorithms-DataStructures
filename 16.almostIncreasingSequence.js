function almostIncreasingSequence(sequence) {
  let i = 0;
  let j = 1;
  let k = 2;
  let isFinished = false;
  let removedElement = [];

  while (isFinished === false) {
    // Check to see previous item is less than next item
    if (sequence[i] < sequence[j] && sequence[j] < sequence[k]) {
      i++;
      j++;
      k++;
    } else {
      // Check to see if the next item is undefined
      if (sequence[k] === undefined) {
        isFinished = true;
        return true;
      } else {
        let a = sequence[i];
        let b = sequence[j];
        let c = sequence[k];

        if (a >= b || a >= c) {
          if (a === b) {
            removedElement.push(sequence.splice(j, 1));
          } else if (a === c) {
            removedElement.push(sequence.splice(k, 1));
          } else {
            removedElement.push(sequence.splice(i, 1));
          }
        } else if (b <= a || b >= c) {
          if (a === b) {
            removedElement.push(sequence.splice(j, 1));
          } else if (a === c) {
            removedElement.push(sequence.splice(k, 1));
          } else {
            removedElement.push(sequence.splice(i, 1));
          }
        } else if (c <= a || c <= b) {
          if (a === b) {
            removedElement.push(sequence.splice(j, 1));
          } else if (a === c) {
            removedElement.push(sequence.splice(k, 1));
          } else {
            removedElement.push(sequence.splice(i, 1));
          }
        }

        if (removedElement.length > 1) {
          isFinished = true;
          return false;
        }

        i = 0;
        j = 1;
        k = 2;
      }
    }
  }
}

almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]);
