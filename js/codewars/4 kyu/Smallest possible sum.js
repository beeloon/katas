// const gcd = (a, b) => (a ? gcd(b % a, a) : b);
const gcd = (a, b) => {
  while (b !== 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return a;
};

const solution = (numbers) => numbers.reduce(gcd) * numbers.length;
