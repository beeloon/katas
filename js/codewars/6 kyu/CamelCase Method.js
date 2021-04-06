const capitalize = (w) => w.charAt(0).toUpperCase() + w.slice(1);

String.prototype.camelCase = function () {
  return this.split(" ").map(capitalize).join("");
};
