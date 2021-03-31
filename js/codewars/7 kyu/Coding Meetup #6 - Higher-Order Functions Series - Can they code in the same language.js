// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
const isSameLanguage = (list) =>
  list.every(({ language }) => language === list[0].language);
