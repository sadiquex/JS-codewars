/*
Implement a function that receives two IPv4 addresses, and returns 
the number of addresses between them (including the first one, 
excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. 
The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end) {
  // take each number separately in the ip address
  const first = end.split(".")[3] - start.split(".")[3];
  const second = end.split(".")[2] - start.split(".")[2];
  const third = end.split(".")[1] - start.split(".")[1];
  const fourth = end.split(".")[0] - start.split(".")[0];
  //   console.log(first, second, third, fourth);

  const calc = (n, m = 1) => (end.split(".")[n] - start.split(".")[n]) * m;
  return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));

// googled the answer, don't fully get it but it works so yeah:)
