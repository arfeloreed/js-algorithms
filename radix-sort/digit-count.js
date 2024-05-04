function digitCount(num) {
  // if (num === 0) return 1;
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
  return Math.abs(num).toString().length;
}

// console.log(digitCount(-500));
// console.log(digitCount(0));

function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    const count = digitCount(arr[i]);

    if (count > maxDigits) maxDigits = count;
  }

  return maxDigits;
}

console.log(mostDigits([20, -100, 1, -2143])); // 4
console.log(mostDigits([20, -100, 1, 43])); // 3
console.log(mostDigits([0])); // 1
