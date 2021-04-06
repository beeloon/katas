// First solution
function toUnderscore(string) {
  return string
    .toString()
    .replace(/[A-Z]/g, (c, i) => (i != 0 ? "_" : "") + c.toLowerCase());
}

// Better solution
const toUnderscore = (string) =>
  string
    .toString()
    .split(/(?=[A-Z])/g)
    .join("_")
    .toLowerCase();
