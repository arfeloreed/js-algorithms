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
  for (let k = 0; k < mostDigits(arr); k++) {
    // an empty array with empty sub arrays that will act as a bucket
    const bucket = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      bucket[getDigit(arr[i], k)].push(arr[i]);
    }
    // replace the values of the array with the elements in the bucket array
    arr = [].concat(...bucket);
  }

  return arr;
}

console.log(radixSort([123, 12, 0])); // [0,12,123]
console.log(radixSort([123, 12, 0, 1, 11, 1234, 125])); // [0,1,11,12,123,1234]
// console.log(Array.from({ length: 5 }, () => []));
// console.log([].concat([1], [2]));
