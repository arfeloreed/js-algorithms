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
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    // console.log("start", start);
    // console.log("end", end);
    // console.log("middle", middle);

    if (arr[middle] > num) end = middle - 1;
    else if (arr[middle] < num) start = middle + 1;
    else return middle;
  }

  return -1;
}

console.log(findNum([1, 2, 3, 4, 5, 6, 7], 4)); // 3
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 2)); // 1
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 7)); // 6
console.log(findNum([1, 2, 3, 4, 5, 6, 7], 8)); // -1
