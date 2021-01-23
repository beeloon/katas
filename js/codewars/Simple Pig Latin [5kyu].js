/**
 * Function move the first letter of each word to the end of it, then add "ay" to the end of the word.
 * @param {String} str
 */
function pigIt(str) {
  return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + "ay");
}

pigIt("Pig latin is cool") === "igPay atinlay siay oolcay";
pigIt("This is my string") === "hisTay siay ymay tringsay";
