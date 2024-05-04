// radix sort

/* define a function that accepts a list of numbers.
figure out how many digits the largest number has.
Loop from k=0 up to this largest number of digits.
For each iteration of the loop:
  - create bucket for each digit (0-9).
  - place the number in the corresponding bucket based on it kth digit.
Replace our existing array with values in our buckets, starting with 0 and going up
to 9.
Return list at the end. */

function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    const count = digitCount(arr[i]);

    if (count > maxDigits) maxDigits = count;
  }

  return maxDigits;
}

function radixSort(arr) {
  for (let k = 0; k < mostDigits(arr); k++) {}

  return arr;
}

console.log([123, 12, 0]); // [0,12,123]
