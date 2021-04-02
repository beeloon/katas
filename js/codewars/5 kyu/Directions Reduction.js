// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
const dirReduc = (arr) => {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  return arr.reduce((list, dir) => {
    opposite[list.slice(-1)] === dir ? list.pop() : list.push(dir);

    return list;
  }, []);
};
