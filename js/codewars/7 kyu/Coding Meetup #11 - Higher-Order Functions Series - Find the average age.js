const getAverageAge = (list) =>
  Math.round(list.reduce((acc, val) => acc + val.age, 0) / list.length);
