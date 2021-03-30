// https://www.codewars.com/kata/54da5a58ea159efa38000836
// First solution
function findOdd(A) {
  const o = {};

  A.forEach((n) => (o[n] ? o[n]++ : (o[n] = 1)));

  for (let n in o) if (o[n] % 2 !== 0) return +n;
}

// Better solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
