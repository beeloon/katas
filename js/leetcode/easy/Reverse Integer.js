// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let num = 0;
  while (x != 0) {
    const lastNum = x % 10;
    x = Math.trunc(x / 10);
    num = num * 10 + lastNum;
  }

  if (Math.abs(num) > Math.pow(2, 31)) {
    return 0;
  }

  return num;
};

// String manipulation
// const reverse = function (x) {
//   const num = +`${Math.abs(x)}`.split('').reverse().join('');

//   if (num > Math.pow(2, 31)) return 0;

//   return x < 0 ? -num : num;
// };
