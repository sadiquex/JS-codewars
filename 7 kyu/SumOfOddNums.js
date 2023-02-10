/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  // get the first number in nth row
  let startNum = n * (n - 1) + 1;
  let rowArray = [startNum];
  let sum = 0;

  // iterating through the elements in n-1 row
  for (let i = 0; i < n - 1; i++) {
    // adding el of each iteration to rowArray
    rowArray.push(rowArray[i] + 2);
  }
  //   for each element in the arr, add it to sum
  for (let i = 0; i < rowArray.length; i++) {
    sum += rowArray[i];
  }

  //   return rowArray;
  return sum;
}
console.log(rowSumOddNumbers(3));
