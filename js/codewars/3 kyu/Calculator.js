const Calculator = function () {
  const operations = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    devide: (a, b) => a / b,
  };

  this.evaluate = (string) => {
    const operands = string.split(" ");
  };
};
