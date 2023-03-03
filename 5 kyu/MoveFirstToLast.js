/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! 

https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
*/

function pigIt(str) {
  // splitting the string into an array
  const arr = str.split(" ");
  return arr
    .map((word) => {
      const firstLetter = word.substr(0, 1);
      const remainingWord = word.substr(1);
      //   regex checks if it is an alphabet
      return word.match(/[A-z]/i) ? `${remainingWord}${firstLetter}ay` : word;
      // return `${word.substr(1)}${word.substr(0, 1)}ay`;
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool"));
