// selection sort

/* create a function that accepts an array as an input
store the first element as the smallest value you've seen so far.
compare this item to the next item in the array until you find a smaller number.
if smaller number is found, designate that smaller number to be the new 'min' and continue
until the end of the array.
if the 'min' is not the value(index) you initially began with, swap the two values.
repeat this with the next element untill the array is sorted. */

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(sortArr([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2, 6])); // [1,2,3,4,5,6]
console.log(sortArr([5, 3, 4, 1, 2])); // [1,2,3,4,5]
console.log(sortArr([5, 3, -4, 1, 2, 0])); // [-4,0,1,2,3,5]
