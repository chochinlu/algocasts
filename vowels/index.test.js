// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = require('./index');

test("('Hi There!') --> 3", () => {
  expect(vowels('Hi There!')).toBe(3);
});

test("(Why do you ask?') --> 3", () => {
  expect(vowels('Hi There!')).toBe(3);
});

test("('Why?') --> 0", () => {
  expect(vowels('Why?')).toBe(0);
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
