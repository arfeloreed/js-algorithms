// multiple pointers

/* implement a function called countUnique, which accepts a sorted array, and counts
the unique values in the array. There can be negative numbers in the array, but it will
always be sorted. */

// multiple pointer solution
function countUnique(arr) {
  // return 0 for empty arr
  if (arr.length === 0) return 0;
  // set two variables to hold the 2 pointers
  let pointer1 = 0;
  let pointer2 = 1;
  // loop through the arr using while loop with fail safe condition
  while (pointer2 < arr.length) {
    // compare the values of the pointers
    if (arr[pointer1] === arr[pointer2]) {
      // if equal, delete the value represented by pointer2
      arr.splice(pointer2, 1);
    } else {
      // if not equal, increment both pointers
      pointer1++;
      pointer2++;
    }
  }

  // return pointer1 as output for unique values and increment
  return pointer2;
}

// my first solution which is a frequency counter
// function countUnique(arr) {
//   // return 0 if empty arr
//   if (arr.length === 0) return 0;
//   // set a var that will hold the output as an object
//   let uniqueObj = {};
//   // loop through the arr and add the unique char as key in the output var, value is a string "unique"
//   for (let i of arr) {
//     !uniqueObj[i] && (uniqueObj[i] = "unique");
//   }
//   // count the var obj properties and return as a length of an array
//   return Object.keys(uniqueObj).length;
// }

console.log(countUnique([1, 1, 1, 1, 2])); // 2
console.log(countUnique([1, 2, 3, 3, 4, 5, 5, 6, 6, 7])); // 7
console.log(countUnique([])); // 0
console.log(countUnique([-4, -1, 0, 2, 2])); // 4
console.log(countUnique([-4, -1, 0, 2, 2, 3, 3, 3, 3, 3])); // 5
