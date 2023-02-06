/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

*/
function nearestSq(n) {
  //   return n if its a perfect square
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  } else if (Math.sqrt(n) % 1 !== 0) {
    // return closest perfect square
    // find sqrt of n and round it
    // return Math.round(Math.sqrt(n)) ** 2;
    const sqrtOfN = Math.sqrt(n);
    // round it
    const roundSqrtOfN = Math.round(sqrtOfN);
    return roundSqrtOfN ** 2;
  }
}

console.log(nearestSq(45));
