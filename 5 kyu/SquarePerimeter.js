/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

Hint:
See Fibonacci sequence

*/

// perimeter of a square in a rectangle
function perimeter(n) {
  const arr = [1];

  for (let i = 0; i < n; i++) {
    if (arr.length === 1) {
      arr.push(1);
    } else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }

  //   4 * sum of elements in the array - from question
  return arr.reduce((acc, n) => acc + n, 0) * 4;
}

console.log(perimeter(7));
