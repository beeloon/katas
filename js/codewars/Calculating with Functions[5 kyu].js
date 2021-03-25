const calc = (digit) => (operation) => (operation ? operation(digit) : digit);

const zero = calc(0);
const one = calc(1);
const two = calc(2);
const three = calc(3);
const four = calc(4);
const five = calc(5);
const six = calc(6);
const seven = calc(7);
const eight = calc(8);
const nine = calc(9);

const plus = (r) => (l) => l + r;
const minus = (r) => (l) => l - r;
const times = (r) => (l) => l * r;
const dividedBy = (r) => (l) => l / r;

seven(times(five())) == 35;
four(plus(nine())) == 13;
eight(minus(three())) == 5;
six(dividedBy(two())) == 3;
