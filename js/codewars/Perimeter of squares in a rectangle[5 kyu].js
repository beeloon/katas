const fib = (n) => {
  let n1 = 1,
    n2 = 1,
    n3;

  while (n--) {
    n3 = n1 + n2;
    n2 = n1;
    n1 = n3;
  }

  return n1;
};

function perimeter(n) {
  return 4 * (fib(n + 1) - 1);
}
