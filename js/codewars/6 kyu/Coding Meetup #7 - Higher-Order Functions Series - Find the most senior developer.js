// https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript
const findSenior = (list) =>
  list.filter(({ age }) => age == Math.max(...list.map(({ age }) => age)));
