// Find the maximum number in an array containing numbers or other arrays of numbers

function findMax(arr) {
  // return 0 or 1 if arr length is less than 2
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  return Math.max(arr[0], findMax(arr.slice(1)));
}

console.log(findMax([1, 5, 9, -4, 0, -9])); // 9
console.log(findMax([1, 5, 9, -4, 0, -9, 20])); // 20
console.log(findMax([10, 5, 9, -4, 0, -9])); // 10
