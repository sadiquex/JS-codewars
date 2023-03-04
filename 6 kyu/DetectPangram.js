/*
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
*/
// String match a-z. Excepting punctuation and number.
// And “i” meanS case insensitive
// Alphabet Length is 26. Therefore, If Length of string that pass match Method is 26, String have All Alphabet.

function isPangram(string) {
  return (string.match(/([a-z](?!.*\1))/gi) || []).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
