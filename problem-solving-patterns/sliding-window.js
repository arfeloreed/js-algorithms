// sliding window pattern

/* write a function called maxSubarraySum which accepts an array of integers and a number
called n. The function should calculate the max sum of n consecutive elements in the array. */

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  // set variables for max and temp sum
  let maxSum = 0;
  let tempSum = 0;
  // loop through the first n subarray and get total sum and assign to max sum
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  // set temp sum to max sum
  tempSum = maxSum;
  // loop thourh the array, but skip the 1st n subarray
  for (let i = n; i < arr.length; i++) {
    // subtract the subarray first's index value from temp sum then add the current value for i
    tempSum = tempSum - arr[i - n] + arr[i];
    // use Math.max to compare value and set the max sum
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([4, 2, 1, 6, 8], 4)); //17
console.log(maxSubarraySum([], 4)); //null
