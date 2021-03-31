const getFirstPython = (list) => {
  const dev = list.find(({ language }) => language == "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
};
