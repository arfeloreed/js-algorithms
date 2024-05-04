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

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case
  if (left < right) {
    // get the pivot index
    let pivotIdx = pivot(arr, left, right);
    // modifying the left portion of the array from the pivotIndex
    quickSort(arr, left, pivotIdx - 1);
    // modifying the right portion of the array from the pivotIndex
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 4, 5, 8, 2, 3, 7, 6])); // [2,3,4,4,5,6,7,8]
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
