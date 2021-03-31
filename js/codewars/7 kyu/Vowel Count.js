// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// First solution
function getCount(str) {
  var vowelsCount = 0;

  for (let i = 0; i < str.length; i++)
    if (str[i].match(/[aeiou]/)) vowelsCount++;

  return vowelsCount;
}

// Better solution
const getCount = (str) => (str.match(/[aeiou]/gi) || []).length;
// or
const getCount = (str) => str.replace(/[^aeiou]/gi, "").length;
