/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

const moveZeros = (arr) => {
  let zero = [];
  let others = [];
  let together = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    } else {
      others.push(arr[i]);
    }
  }
  together = others.concat(zero);
  return together;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
