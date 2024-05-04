// frequency counter

/* write a function called same, which accepts two arrays. The function should return 
true if every value in the array has it's corresponding value squared in the second
array. The frequency of values must be the same. */

// same([1, 2, 3], [4, 1, 9]) = true
// same([1, 2, 3], [1, 9]) = false
// same([1, 2, 1], [4, 4, 1]) = false

// frequency counter solution
function same(arr1, arr2) {
  // set variables to hold the counter
  let counter1 = {};
  let counter2 = {};
  // loop through both arrays and add/update the counters
  for (let i of arr1) {
    counter1[i] = ++counter1[i] || 1;
    // counter1[i] = (counter1[i] || 0) + 1;
    // if (counter1[i] > 0) counter1[i]++;
    // else counter1[i] = 1;
  }
  for (let i of arr2) {
    counter2[i] = ++counter2[i] || 1;
    // counter2[i] = (counter2[i] || 0) + 1;
    // if (counter2[i] > 0) counter2[i]++;
    // else counter2[i] = 1;
  }
  // loop through counter1 through keys
  for (let key in counter1) {
    // check if key squared exist in counter2, if not return false
    if (!(key ** 2 in counter2)) return false;
    // if exists check if the value is the same, if not return false
    if (counter1[key] !== counter2[key ** 2]) return false;
  }
  // default return true
  return true;
}

/* naive solution
function same(arr1, arr2) {
  // loop through the first array
  for (let i of arr1) {
    // square every element and check if it exists on arr2
    let squared = i ** 2;
    if (arr2.includes(squared)) {
      // if exists delete the existing char in case there is a copy of the same char
      const index = arr2.indexOf(squared);
      arr2.splice(index, 1);
    }
    // if not return false
    else {
      return false;
    }
  }
  // return true by default
  return true;
} */

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [4, 1, 9, 4])); // true
console.log(same([1, 2, 3, 2], [4, 1, 9])); // false
