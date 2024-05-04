// insertion sort

/* create a function that accepts an array.
start by picking the second element in the array.
now compare the second element with the one before it and swap if necessary.
continue to the next element and if it is in the incorrect order, iterate through 
the sorted portion (i.e. the left side) to place the element in the correct place.
repeat until the array is sorted. */

function sortArr(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        arr.splice(j, 0, arr[i]);
        arr.splice(i + 1, 1);
      }
    }
  }

  return arr;
}

console.log(sortArr([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2, 6])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2])); // [1,2,3,4,5]
console.log(sortArr([5, 3, -4, 1, 2, 0])); // [-4,0,1,2,3,5]
