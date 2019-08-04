//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = require('./index');

test('15 --> 51', () => {
  expect(reverseInt(15)).toBe(51);
});

test('981 --> 189', () => {
  expect(reverseInt(981)).toBe(189);
});

test('500 --> 5', () => {
  expect(reverseInt(500)).toBe(5);
});

test('-15 --> -51', () => {
  expect(reverseInt(-15)).toBe(-51);
});

test('-90 --> -9', () => {
  expect(reverseInt(-90)).toBe(-9);
});
