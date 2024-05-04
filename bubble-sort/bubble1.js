// bubble sort

/* create a function that accepts an array
start looping from with a var called i the end of the array towards the beginning
start an inner loop with a var called j from the beginning until i-1 
if arr[j] is greater than arr[j+1], swap those two values
return the sorted array */

function sortArr(arr) {
  // var that will check if a swap had happened
  let hasSwap = true;
  for (let i = arr.length - 1; i > 0; i--) {
    // set hasSwap to false for defensive purpose of no swapping to happen
    hasSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // if swap happened set to true
        hasSwap = true;
      }
    }
    // if no swap happened break the loop
    if (!hasSwap) break;
  }

  return arr;
}

console.log(sortArr([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2, 6])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2])); // [1,2,3,4,5]
console.log(sortArr([5, 3, -4, 1, 2, 0])); // [-4,0,1,2,3,5]
