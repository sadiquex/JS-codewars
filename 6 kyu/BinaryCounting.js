/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

const countBits = (x) => {
  // convert to binary
  const Binary = x.toString(2);
  //   convert Binary to a number array
  const arr = Array.from(String(Binary), Number);
  // return number of 1s in the array
  return arr.filter((item) => item === 1).length;
};

const result = countBits(1234);

console.log(result);
