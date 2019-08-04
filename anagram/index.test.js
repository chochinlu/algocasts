// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagram = require('./index');

test("('rail safety', 'fairy tales') --> True", () => {
  expect(anagram('rail safety', 'fairy tales')).toBeTruthy();
});

test("('RAIL! SAFETY!', 'fairy tales') --> True", () => {
  expect(anagram('RAIL! SAFETY!', 'fairy tales')).toBeTruthy();
});

test("('Hi there', 'Bye there') --> True", () => {
  expect(anagram('Hi there', 'Bye there')).not.toBeTruthy();
});
