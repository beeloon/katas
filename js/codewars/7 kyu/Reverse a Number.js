const reverseNumber = (n) =>
  (n < 0 ? -1 : 1) * `${Math.abs(n)}`.split("").reverse().join("");
