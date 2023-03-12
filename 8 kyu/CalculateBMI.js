/*
https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
*/
function bmi(weight, height) {
  const bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}

// alternative
const bmi2 = () => {
  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
};

console.log(bmi(80, 1.8));

// if this, then this
