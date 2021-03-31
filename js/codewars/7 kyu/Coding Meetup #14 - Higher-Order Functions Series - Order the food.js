const orderFood = (list) =>
  list.reduce((acc, d) => ((acc[d.meal] = (acc[d.meal] || 0) + 1), acc), {});
