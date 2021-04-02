const reorder = (w) => w.split("").sort().join("");

const anagrams = (word, words) =>
  words.filter((w) => reorder(w) === reorder(word));
