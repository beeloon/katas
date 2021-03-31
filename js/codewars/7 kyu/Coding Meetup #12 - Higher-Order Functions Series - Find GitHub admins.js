// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript
const findAdmin = (list, lang) =>
  list.filter(
    ({ language, githubAdmin }) => language == lang && githubAdmin == "yes"
  );
