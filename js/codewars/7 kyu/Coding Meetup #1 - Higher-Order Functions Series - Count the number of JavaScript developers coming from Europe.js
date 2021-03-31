const countDevelopers = (list) =>
  list.filter(
    ({ language, continent }) =>
      continent == "Europe" && language == "JavaScript"
  ).length;
