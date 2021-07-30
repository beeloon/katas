// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers) {
  const joined = numbers.join('');

  return `(${joined.slice(0, 3)}) ${joined.slice(3, 6)}-${joined.slice(6)}`;
}
