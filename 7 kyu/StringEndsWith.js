/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

Complete the solution so that it returns true if the first 
argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending) {
  // const strArray = Array.from(str);
  const strArray = str.split("");
  // const endingArray = Array.from(ending);
  const endingArray = ending.split("");
  //   if last element in string === last element in ending, return true
  const strLast = strArray[strArray.length - 1];
  const endLast = endingArray[endingArray.length - 1];
  if (strLast === endLast) {
    return true;
  }
  return false;
}

// best practice
function solution(str, ending) {
  return str.endsWith(ending);
}
