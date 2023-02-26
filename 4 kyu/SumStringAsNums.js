/* 
https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
Given the string representations of two integers, 
return the string representation of the sum of those integers.
For example:

sumStrings('1','2') // => '3'
*/

const sumStrings = (a, b) => {
  const sumStr = (BigInt(a) + BigInt(b)).toString();
  //   const sumStr = (parseInt(a) + parseInt(b)).toString();
  if (isNaN(sumStr)) {
    // return the number if the answer is NaN
    return a ? isNaN : b;
  }
  return sumStr;
};

console.log(sumStrings("", "2"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
