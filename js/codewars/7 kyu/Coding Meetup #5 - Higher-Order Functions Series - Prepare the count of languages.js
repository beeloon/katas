// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
const countLanguages = (list) =>
  list
    .map(({ language }) => language)
    .reduce((acc, lang) => ((acc[lang] = (acc[lang] || 0) + 1), acc), {});
