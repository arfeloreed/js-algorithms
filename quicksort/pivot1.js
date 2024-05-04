// quick sort pivot step

/* it will help to accept three arguments: an array, a start index and an end index(these can
default to 0 and the array length minus 1, respectively).
grab the pivot from the start of the array.
Store the current pivot index in a variable (this will keep track of where the pivot 
should end up).
Loop thourh the array from start untill the end:
  - if the pivot is greater than the current element, increment the pivot index variable 
  and then swap the current element with the element at the pivot index.
Swap the starting element (i.e. the pivot) with the pivot index.
Return the pivot index. */

function pivot(arr, start = 0, end = arr.length - 1) {
  let current = arr[start];
  let swpIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (current > arr[i]) {
      swpIdx++;
      [arr[i], arr[swpIdx]] = [arr[swpIdx], arr[i]];
    }
  }

  [arr[start], arr[swpIdx]] = [arr[swpIdx], arr[start]];

  return swpIdx;
}

// function pivot(arr, start = 0, end = arr.length - 1) {
//   let pivot = start;
//   let swapIdx = pivot;
//   start = 1;

//   while (start <= end) {
//     if (arr[pivot] >= arr[start]) {
//       swapIdx++;
//       if (start !== swapIdx) [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
//     }
//     start++;
//   }

//   [arr[pivot], arr[swapIdx]] = [arr[swapIdx], arr[pivot]];

//   return swapIdx;
// }

console.log(pivot([4, 4, 5, 3, 2, 6, 7, 8])); // 3
console.log(pivot([5, 1, 2, 3, 4, 6, 7, 8])); // 4
console.log(pivot([8, 1, 2, 3, 4, 6, 7, 5])); // 7
console.log(pivot([2, 1, 8, 3, 4, 6, 7, 5])); // 1
