// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
  let nod = 0;
  for (let i = 1; i <= n; i++) if (n % i == 0) nod++;
  return nod;
}
