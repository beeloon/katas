// Long execution
const findUniq = (a) =>
  a.filter((n) => a.join("").match(new RegExp(n, "g")).length === 1)[0];

// First solution
const findUniq = (a) => {
  const counts = a.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  for (let prop in counts) if (counts[prop] == 1) return +prop;
};

// Better solution
const findUniq = (a) => a.find((n) => a.indexOf(n) === a.lastIndexOf(n));
