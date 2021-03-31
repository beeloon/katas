// First solution
const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.reduce((acc, next) => acc + (next ? 1 : 0), 0);

// Better solution
const countSheeps = (x) => x.filter(Boolean).length;
