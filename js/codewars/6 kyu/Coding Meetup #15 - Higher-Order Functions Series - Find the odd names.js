// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript
const findOddNames = (list) =>
  list.filter(
    (d) =>
      d.firstName.split("").reduce((a, v) => a + v.charCodeAt(), 0) % 2 !== 0
  );
