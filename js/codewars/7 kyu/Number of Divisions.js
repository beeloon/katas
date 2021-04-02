// First solution
const divisions = (n, divisor) => {
  let count = 0;
  while (n >= divisor) {
    n = Math.floor(n / divisor);
    count++;
  }
  return count;
};

// Clever solution
const divisions = (n, divisor) => Math.floor(Math.log(n) / Math.log(divisor));
