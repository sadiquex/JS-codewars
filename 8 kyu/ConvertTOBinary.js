// convert a number to binary

const convertToBinary = (x) => {
  // return the num in base 2
  return x.toString(2);
};

const result = +convertToBinary(1234);
// the + changes the result to int

console.log(result);
