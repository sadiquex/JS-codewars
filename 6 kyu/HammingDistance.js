/* The Hamming Distance is a measure of similarity between two strings of equal length. 
Complete the function so that it returns the number of positions where the input strings do not match.

You can assume that the two input strings are of equal length. */

function hamming(a, b) {
  str1 = a.split("");
  str2 = b.split("");
  let i = 0,
    count = 0;
  while (i < str1.length) {
    if (str1[i] != str2[i]) count++;
    i++;
  }
  return count;
}

console.log(hamming("I like turtles", "I like turkeys"));
