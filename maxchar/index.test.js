// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = require('./index');

test('abcccccccd --> c', () => {
  expect(maxChar('abcccccccd')).toBe('c');
});

test('apple 1231111 --> 1', () => {
  expect(maxChar('apple 1231111')).toBe('1');
});
