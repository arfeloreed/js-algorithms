// Naive string search

/* function will take a longer and shorter string as inputs
loop over the longer string
loop over the shorter string
if the characters don't match, break out of the inner loop
if the characters do match, keep going
if you complete the inner loop and find a match,
increment the count of matches
return the count */

function countMatch(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      // counter var to verify if loop was successful
      let counter = 1;
      for (let j = 1; j < str2.length; j++) {
        if (str1[i + j] !== str2[j]) break;
        counter++;
      }
      // increment count if loop was a success
      if (counter === str2.length) count++;
    }
  }

  return count;
}

console.log(countMatch("wowomgzomg", "omg")); // 2
console.log(countMatch("wowomgzomg", "mgz")); // 1
console.log(countMatch("wowowomgzomg", "wo")); // 3
console.log(countMatch("wowowomgzomg", "abc")); // 0
