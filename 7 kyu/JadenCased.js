/*
https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
*/
// String.prototype.toJadenCase = function (str) {
//   return str.split("").map((el) => el[0].toUpperCase());
// };

String.prototype.toJadenCase = function () {
  var returnString = [];
  var words = this.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    returnString.push(word[0].toUpperCase() + word.slice(1));
  }
  return returnString.join(" ");
};
