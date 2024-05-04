// write a function that accepts a string input and returns a reversed copy.

function reverse(string) {
  return string.split("").reverse().join("");
}

const newString = reverse("string");
console.log(newString);
