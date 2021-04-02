// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// First solution
function generateHashtag(str) {
  return str == "" || str.length > 140
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// Seconds solution
function generateHashtag(str) {
  const hashtag = str.split(" ").reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.slice(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
