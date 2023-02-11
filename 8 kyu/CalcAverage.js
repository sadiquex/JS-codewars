/* Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0. */

function findAverage(array) {
  let sum = 0;
  //   for each number,add the number to sum
  array.map((x) => (sum += x));
  // return 0 if NaN else return average
  return array.length === 0 ? 0 : sum / array.length;
}

console.log(findAverage([2, 3, 4, 67]));
// console.log(findAverage([]));
