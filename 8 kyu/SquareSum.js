function squareSum(numbers) {
  let sum = 0;
  //   Square the elements and for each iteration, add it to the sum
  numbers.map((number) => number ** 2).forEach((el) => (sum += el));
  return sum;
}

console.log(squareSum([0, 3, 4, 5]));
