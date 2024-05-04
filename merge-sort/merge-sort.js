// merge sort implementation

/* Break up the array into halves until you have arrays that are empty or have one element.
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are
back at the full length of the array.
Once the array has been merged back together, return the merged (and sorted) array. */

// merging array function from step 1
function mergeArr(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// merge sort commonly used with recursion
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArr(left, right);
}

// for testing
function createRdmArr() {
  let randomNums = [];

  for (let i = 0; i < 10; i++) {
    randomNums.push(Math.ceil(Math.random() * 50));
  }

  return randomNums;
}

console.log(mergeSort([3, 5, 4, 1, 2])); // [1,2,3,4,5]
console.log(mergeSort(createRdmArr()));
console.log(mergeSort(createRdmArr()));
console.log(mergeSort(createRdmArr()));
