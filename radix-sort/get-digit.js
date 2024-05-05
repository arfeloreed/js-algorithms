function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);

  // let numStr = Math.abs(num).toString();
  // place = (place + 1) * -1;

  // if (numStr.length + place < 0) return 0;
  // return parseInt(numStr.substr(place, 1));
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(1234567890, 0)); // 0
console.log(getDigit(1234567890, 6)); // 4
console.log(getDigit(1234567890, 7)); // 3
console.log(getDigit(1234567890, 8)); // 2
console.log(getDigit(-1234567890, 10)); // 0
// console.log(Math.pow(10, 1));
