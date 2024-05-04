// Find the maximum number in an array containing numbers or other arrays of numbers

function findMax(arr) {
  // return 0 or 1 if arr length is less than 2
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  // var that will the max sum
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // check if the element is an array
    const isArr = Array.isArray(arr[i]);
    // if element is an array apply recursion to the element
    if (isArr) arr[i] = findMax(arr[i]);
    // if current arr element is greater than max sum assign value to max sum
    if (arr[i] > maxSum) maxSum = arr[i];
  }

  return maxSum;
}

console.log(findMax([1, 5, [9, -4, 0], -9])); // 9
console.log(findMax([1, 5, [9, -4], 0, [-9, 20]])); // 20
console.log(findMax([1, [5, [9, [-4, 10]], -9]])); // 10
console.log(findMax([])); // 0
console.log(findMax([1])); // 1
// console.log(Math.max(-Infinity, 0)); // 0
