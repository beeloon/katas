const actions = {
  AND: (x, y) => x && y,
  OR: (x, y) => x || y,
  XOR: (x, y) => x !== y,
};

const logicalCalc = (list, op) => list.reduce(actions[op]);
