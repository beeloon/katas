// First Solution
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i >= 1; i--) arr.push(i);
  return arr;
};

// Concise Solution
const reverseSeq = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => n - i);
