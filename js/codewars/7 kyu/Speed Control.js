// Better solution
const gps = (s, x) =>
  Math.floor(
    (3600 * x.slice(1).reduce((m, d, i) => Math.max(m, d - x[i]), 0)) / s
  );
