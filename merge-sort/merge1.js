// merge sort merging 2 arrays step

/* write a function that accepts 2 arrays.
create an empty array, take a look at the smallest values in each input array.
While there are still values we haven't looked at:
- if the value in the first array is smaller than the value in the second array, push the value
in the first array into our results and move on to the next value in the first array.
- if the value in the first array is larger than the value in the second array, push the value in the
second array into our results and move on to the next value in the second array.
- once we exhaust one array, push in all remaining values from the other array. */

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

console.log(mergeArr([1, 3, 5], [2, 4, 6, 7, 8, 9])); // [1,2,3,4,5,6,7,8,9]
console.log(mergeArr([1, 3, 5, 7, 8], [2, 4, 6])); // [1,2,3,4,5,6,7,8]
console.log(mergeArr([1, 3, 5], [2, 4, 6])); // [1,2,3,4,5,6]
