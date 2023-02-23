/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

*/

function compare(array1, array2) {
  if (array1 == null || array2 == null) return false;
  // sort arrays in ascending order
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  return (
    array1
      .map((el) => el ** 2)
      // for the element in the current iteration in array1,
      // return it if it is the current iteration in array2.

      // the every method is running on array1
      // the every method's parameters are a function and an array
      // the function takes currentValue,index
      .every((element, i) => element == array2[i])
    // for every element in array1, return element if element is equal to the
    // current iteration in array2
  );
}

console.log(
  compare(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

// check if the array is null
// sort both arrays
// square the elements in the first array
// compare the elements in the iteration,since theyre sorted the same
// if all the elements are the same, return them, else do not return.
