/* write a function that accepts an array and a value. Loop through the array and check
if the current array element is equal to the value. If it is, return the index at which 
the element is found. If the value is never found, return -1. */

function lookIndex(arr, val) {
  // using for loop
  for (let i = 0; i < arr.length; i++) {
    // compare current value of index if equal to val, return index
    if (arr[i] === val) return i;
  }

  // if value is not found on the arr return -1
  return -1;
}

console.log(lookIndex([1, 2, 3, 4, 5], 3)); // 2
console.log(lookIndex([1, 2, 3, 4, 5], 4)); // 3
console.log(lookIndex([1, 2, 3, 4, 5], 2)); // 1
