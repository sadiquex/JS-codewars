function squareDigits(num) {
  //   return num.split("").map((el) => el ** 2);
  return parseInt(
    num
      .toString()
      .split("")
      .map((el) => el ** 2)
      .join("")
  );
}

console.log(squareDigits(3212));
