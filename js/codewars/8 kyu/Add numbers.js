function add() {
  return [...arguments].reduce((a, v) => a + v, 0);
}

const add = (...args) => [...arguments].reduce((a, v) => a + v, 0);
