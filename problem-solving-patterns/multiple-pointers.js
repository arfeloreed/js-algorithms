// multiple pointers pattern

/* write a function called sumZero which accepst a sorted array of integers. The function should 
find the first pair where the sum is zero. Return an array that includes both values that sum to zero
or undefined if a pair does not exist. */

function sumZero(arr) {
  // set variables that will represent both ends of the array
  let left = 0;
  let right = arr.length - 1;
  // loop through the arr with a fail safe condition
  while (left < right) {
    // check both ends' sum is equal to zero then return the pair in array
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    // if not, if sum is greater than zero move end pointer down 1
    else if (sum > 0) right--;
    // if sum is less than zero, up left pointer by 1
    else left++;
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 3, 5, 6])); // [-3, 3]
console.log(sumZero([-7, -4, -2, -1, 0, 1, 2, 5, 6])); // [-2, 2]
console.log(sumZero([-2, -1, 0, 1])); // [-1, 1]
console.log(sumZero([1, 3, 5])); // undefined
console.log(sumZero([-4, 0, 5])); // undefined
