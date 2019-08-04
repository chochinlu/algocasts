// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = require('./index');

test('apple --> leppa', () => {
  expect(reverse('apple')).toBe('elppa');
});

test('hello --> olleh', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('Greetings! --> !sgniteerG', () => {
  expect(reverse('Greetings!')).toBe('!sgniteerG');
});
