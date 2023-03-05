/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

*/

String.prototype.camelCase = function (str) {
  const arr = this.split(" ");
  // return arr.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join("");
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

console.log("camel case method".camelCase());

// slice (a,b) - start from index a to index b without index b
