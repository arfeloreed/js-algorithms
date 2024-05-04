function sortArr(arr) {
  let currentVal;
  let j;

  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// insertionSort([2,1,9,76,4])
console.log(sortArr([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2, 6])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2])); // [1,2,3,4,5]
console.log(sortArr([5, 3, -4, 1, 2, 0])); // [-4,0,1,2,3,5]
