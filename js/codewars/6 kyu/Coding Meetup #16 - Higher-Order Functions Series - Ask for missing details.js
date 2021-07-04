// https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript

const askForMissingDetails = (list) =>
  list.filter((user) =>
    Object.keys(user).some(
      (key) =>
        user[key] === null &&
        (user.question = `Hi, could you please provide your ${key}.`)
    )
  );
