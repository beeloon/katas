// First solution
const moveZeros = function (arr) {
  let r = [],
    zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeros++;
      continue;
    }
    r.push(arr[i]);
  }
  return [...r, ...Array(zeros).fill(0)];
};

// Better solution
const moveZeros = (arr) =>
  arr.filter((n) => n !== 0).concat(arr.filter((z) => z === 0));
