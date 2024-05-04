// POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(3, 3)); // 27

// FACTORIAL SOLUTION
function factorial(x) {
  // if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(3)); // 6

// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3])); // 6

// RECURSIVE RANGE SOLUTION sum of an array
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
console.log(recursiveRange(3)); // 6

// FIBONACCI SOLUTION
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10)); // 55

function findFibonacci(n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

console.log(findFibonacci(10)); // 55
