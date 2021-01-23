/**
 * Function increment number in the end of the string. If number does't exist, then add 1 to the end.
 * @param {String} str
 * @returns {String}
 */
const incrementString = (str) => str.replace(/[0-8]?9*$/, (d) => `${++d}`);

incrementString("foo") === "foo1";
incrementString("foobar23") === "foobar24";
incrementString("foo0042") === "foo0043";
incrementString("foo9") === "foo10";
incrementString("foo099") === "foo100";
