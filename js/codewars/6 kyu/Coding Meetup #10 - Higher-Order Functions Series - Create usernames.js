// https://www.codewars.com/kata/582a53ed261c2af9d200018c/solutions/javascript
const addUsername = (list) =>
  list.map((d) => {
    d.username = `${d.firstName.toLowerCase()}${d.lastName.toLowerCase()[0]}${
      new Date().getFullYear() - d.age
    }`;
    return d;
  });
