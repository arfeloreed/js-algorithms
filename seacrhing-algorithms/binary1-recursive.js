// binary search

/* this function accepts a sorted array and value
create a start pointer at the start of the array and end pointer at the end of the 
array
while the start pointer comes before the end pointer:
  - create a pointer in the middle
  -if you find the value you want, return the index
  -if the value is too small, move the start pointer up
  -if the value is too large, move the end pointer down
if you never found the value return -1 */

function findNum(arr, num) {
  // helper function that will use recursion
  function helpFindNum(arr, num, start, end) {
    // base case
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > num) return helpFindNum(arr, num, start, mid - 1);
    else if (arr[mid] < num) return helpFindNum(arr, num, mid + 1, end);
    else return mid;
  }
  // call the helper function
  return helpFindNum(arr, num, 0, arr.length - 1);
}

console.log(findNum([1, 2, 3, 4, 5, 6, 7], 3)); // 2
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 2)); // 1
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 7)); // 6
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 8)); // -1
