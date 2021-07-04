// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function isLanguageDiverse(list) {
  const langs = Object.values(
    list.reduce(
      (acc, user) => (
        (acc[user.language] = (acc[user.language] || 0) + 1), acc
      ),
      {}
    )
  );

  return Math.max(...langs) <= Math.min(...langs) * 2;
}
