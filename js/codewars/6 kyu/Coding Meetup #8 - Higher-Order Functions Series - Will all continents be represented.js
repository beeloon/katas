// https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript
// First solution
const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const allContinents = (list) =>
  !list.reduce((acc, dev) => acc.filter((c) => c !== dev.continent), continents)
    .length;

// Better solutions
const allContinents = (list) =>
  ["Africa", "Americas", "Asia", "Europe", "Oceania"].every((x) =>
    list.some((y) => x == y.continent)
  );

const allContinents = (list) =>
  new Set(list.map((dev) => dev.continent)).size === 5;
