/**
 * Return a list of items without any elements with the same value next
 * to each other and preserving the original order of elements.
 * @param {Array | String} iterable
 */
function uniqueInOrder(iterable) {
  const result = [];
  let prev = null;

  for (let i in iterable)
    if (iterable[i] != prev) {
      prev = iterable[i];
      result.push(iterable[i]);
    }

  return result;
}

// Short solution
const uniqueInOrder = (iterable) =>
  [].filter.call(iterable, (a, i) => iterable[i - 1] !== a);

uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];
uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
