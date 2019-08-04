// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = require('./index');

test('abba --> true', () => {
  expect(palindrome('abba')).toBeTruthy();
});

test('abcba --> true', () => {
  expect(palindrome('abcba')).toBeTruthy();
});

test('abcdefg --> false', () => {
  expect(palindrome('abcdefg')).not.toBeTruthy();
});
