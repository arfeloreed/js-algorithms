// using frequency counter

/* given 2 strings, write a function to determine if the second string is an anagram
of the first. An anagram is a word, phrase, or name formed by rearranging the letters of
another, such as cinema, formed from iceman. */

function validAnagram(str1, str2) {
  // if both empty srtings return true
  if (str1 === "" && str2 === "") return true;
  // check if both strings have the same length, if not return false
  if (str1.length !== str2.length) return false;
  // set variables to hold the counters
  let counter1 = {};
  let counter2 = {};
  // loop through the strings and add characters to the counter with their count
  for (let i of str1) {
    counter1[i] = ++counter1[i] || 1;
  }
  for (let i of str2) {
    counter2[i] = ++counter2[i] || 1;
  }
  // loop through keys of counter1
  for (let key in counter1) {
    // check key exists in counter 2, if not return false
    if (!(key in counter2)) return false;
    // if key exist, check if they have the same value. If not return false
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("car", "rat")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
