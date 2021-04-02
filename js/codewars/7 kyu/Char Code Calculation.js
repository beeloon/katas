// https://www.codewars.com/kata/57f75cc397d62fc93d000059/javascript
// First solution
function calc(x) {
  const total1 = x.replace(/./g, (c) => c.charCodeAt());
  const total2 = total1.replace(/7/g, 1);
  const sum = (list) => [...list].reduce((a, v) => +a + +v);

  return sum(total1) - sum(total2);
}

// Clever solution
const calc = (x) =>
  (x.replace(/./g, (x) => x.charCodeAt()).match(/7/g) || []).length * 6;
