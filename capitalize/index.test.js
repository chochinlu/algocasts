// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = require('./index');

test("('a short sentence') --> 'A Short Sentence'", () => {
  expect(capitalize('a short sentence')).toBe('A Short Sentence');
});

test("('a lazy fox') --> 'A Lazy Fox'", () => {
  expect(capitalize('a lazy fox')).toBe('A Lazy Fox');
});

test("('look, it is working!') --> 'Look, It Is Working!'", () => {
  expect(capitalize('look, it is working!')).toBe('Look, It Is Working!');
});
