const binarySearch = require('./index');

const sortedData = [
  -2,
  16,
  21,
  22,
  39,
  41,
  47,
  49,
  52,
  57,
  60,
  65,
  71,
  77,
  90,
  91
];

test('target 77 is true', () => {
  const target = 77;
  expect(binarySearch(sortedData, target)).toBeTruthy();
});

test('target 2 is false', () => {
  const target = 2;
  expect(binarySearch(sortedData, target)).not.toBeTruthy();
});

test('target 78 is false', () => {
  const target = 78;
  expect(binarySearch(sortedData, target)).not.toBeTruthy();
});

test('target -2 is true', () => {
  const target = -2;
  expect(binarySearch(sortedData, target)).toBeTruthy();
});

test('target -1 is true', () => {
  const target = -1;
  expect(binarySearch(sortedData, target)).not.toBeTruthy();
});
