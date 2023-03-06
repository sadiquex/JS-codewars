// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

function vowelOne(s) {
  const vowels = ["a", "e", "i", "o", "u"];

  const arr = s.toLowerCase().split("");
  return arr.map((el) => (vowels.includes(el) ? 1 : 0)).join("");
}

console.log(vowelOne("abceios"));
