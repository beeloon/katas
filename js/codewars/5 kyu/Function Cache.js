function cache(func) {
  const memo = new Map();

  return (...args) => {
    const key = JSON.stringify(...args);
    if (memo.has(key)) {
      return memo.get(key);
    }

    const val = func(...args);
    memo.set(key, val);

    return val;
  };
}
