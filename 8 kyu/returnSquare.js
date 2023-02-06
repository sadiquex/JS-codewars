// if the sqrt of the number is an even no, return even square

const returnSquare = (n) => {
  if (Math.sqrt(n) % 2 === 0) {
    return "even Square";
  } else {
    return "Not even square";
  }
};

console.log(returnSquare(64));
