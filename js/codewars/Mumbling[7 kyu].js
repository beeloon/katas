// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// First Solution
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
