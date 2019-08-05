const parentheseMap = new Map([['(', ')'], ['[', ']'], ['{', '}']]);

const isValid = function(s) {
  const stack = [];

  for (const c of s) {
    if (parentheseMap.has(c)) {
      stack.push(parentheseMap.get(c));
    } else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
