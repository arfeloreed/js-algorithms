// divide and conquer pattern

/* given a sorted array of intergers, write a function called search, that accepts a
value and returns the index where the value passed to the function is located. If the value is
not found, return -1. */

function search(arr, n) {
  // set variables that will hold the min and max pointers that will represent the indexes
  let min = 0;
  let max = arr.length - 1;
  // while loop with fail safe condition
  while (min <= max) {
    console.log("min", min);
    console.log("max", max);
    // set a middle point by the dividing the array in 2 parts
    let middle = Math.floor((min + max) / 2);
    console.log("middle", middle);

    // set middle as value for comparison with n
    // if middle value greater than n set max to middle-1
    if (arr[middle] > n) max = middle - 1;
    // else if less than n set min to middle+1
    else if (arr[middle] < n) min = middle + 1;
    // if equal return middle
    else return middle;
  }

  // by default return -1
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 2)); // 1
// console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
