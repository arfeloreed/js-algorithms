function countUnique(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUnique([1, 1, 1, 1, 2])); // 2
console.log(countUnique([1, 2, 3, 3, 4, 5, 5, 6, 6, 7])); // 7
console.log(countUnique([])); // 0
console.log(countUnique([-4, -1, 0, 2, 2])); // 4
console.log(countUnique([-4, -1, 0, 2, 2, 3, 3, 3, 3, 3])); // 5
