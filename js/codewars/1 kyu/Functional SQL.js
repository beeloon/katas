var query = function () {
  let output = [];

  const commands = {
    select(fn) {
      output = output.map(fn);
      return this;
    },
    from(obj) {
      output = obj;
      return this;
    },
    where(fn) {
      output = output.filter(fn);
      return this;
    },
    orderBy() {
      return this;
    },
    groupBy() {
      return this;
    },
    having() {
      return this;
    },
    execute() {
      return output;
    },
  };

  return commands;
};
