/* Write a function which takes in a string and returns counts of each character in
the string */

// "HeLlo" = {h: 1, e: 1, l: 2, o: 1}
// "HeLlo there!" = should exclude space and special char
// "HeLlo 123" = {h: 1, e: 1, l: 2, o: 1, 1: 1, 2: 1, 3: 1} should output numbers as well

// console.log(/[0-9a-z]/.test("i"));

function countChar(str) {
  // object variable that will hold the output
  let result = {};
  // loop through the string
  for (let i of str) {
    i = i.toLowerCase();
    if (/[0-9a-z]/.test(i)) {
      // result[i] > 0 ? result[i]++ : (result[i] = 1);
      result[i] = ++result[i] || 1;

      // // if char is alphanumeric and in output var add count
      // if (result[i] > 0) {
      //   result[i]++;
      // }
      // // if char is alphanumeric and not in output var add char with count 1
      // else {
      //   result[i] = 1;
      // }
    }
  }
  // return output var
  return result;
}

console.log(countChar("HeLlo"));
console.log(countChar("HeLlo there!"));
console.log(countChar("HeLlo $123"));
