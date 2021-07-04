// https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript
function isLanguageDiverse(list) {
  list.reduce((acc, user) => {
    acc[user.language] = (acc[user.language] ?? 0) + 1;
  }, {});
}
