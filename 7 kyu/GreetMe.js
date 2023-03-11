// https://www.codewars.com/kata/535474308bb336c9980006f2/solutions/javascript

const greet = (name) => {
  //   return `Hello ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`;
  return `Hello ${name.slice(0, 1).toUpperCase()}${name
    .slice(1)
    .toLowerCase()}!`;
};
console.log(greet("BILLY"));
