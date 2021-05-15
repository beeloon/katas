// First solution
function highestRank(arr) {
  let high = 0,
    max,
    memo = {};

  for (let n of arr) {
    memo[n] = (memo[n] || 0) + 1;

    if (memo[n] > high) {
      high = memo[n];
      max = n;
    }
  }

  return max;
}

// Clever solution
const highestRank = (arr) =>
  arr.sort(
    (a, b) =>
      arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
  )[0];
