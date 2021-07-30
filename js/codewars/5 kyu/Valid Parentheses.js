// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
// v1
function validParentheses(parens) {
  let indent = 0;

  for (let i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == '(' ? 1 : -1;
  }

  return indent == 0;
}

// v2
function validParentheses(parens) {
  let stack = [];

  for (let i = 0; i < parens.length; i++) {
    const current = parens[i];

    if (current === ')') {
      if (stack.pop() !== '(') return false;
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

// v3
function validParentheses(parens) {
  let stack = [];
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < parens.length; i++) {
    const current = parens[i];

    if (isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

function isClosedBracket(bracket) {
  return [')', ']', '}'].indexOf(bracket) > -1;
}
