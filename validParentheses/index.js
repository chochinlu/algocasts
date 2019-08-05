const isValid = function(s) {
  const stack = [];

  for (const c of s) {
    if (['(', '{', '['].includes(c)) {
      stack.push(c);
    } else {
      if (c === ')') {
        if (stack.length === 0) {
          return false;
        }

        if (stack.pop() !== '(') {
          return false;
        }
      }

      if (c === ']') {
        if (stack.length === 0) {
          return false;
        }

        if (stack.pop() !== '[') {
          return false;
        }
      }

      if (c === '}') {
        if (stack.length === 0) {
          return false;
        }

        if (stack.pop() !== '{') {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
