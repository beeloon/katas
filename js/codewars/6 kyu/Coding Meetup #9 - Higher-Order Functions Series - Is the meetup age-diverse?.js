// https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript

const isAgeDiverse = (list) =>
  [...Array(10)].every((_, idx) =>
    list.find(({ age }) =>
      idx === 9 ? age >= 100 : Math.floor(age / 10) === idx + 1
    )
  );

console.log(isAgeDiverse(list1));
