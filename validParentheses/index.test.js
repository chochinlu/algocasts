const isValid = require('./index');

test('() -> true', () => {
  expect(isValid('()')).toBeTruthy();
});

test('()[]{} -> true', () => {
  expect(isValid('()[]{}')).toBeTruthy();
});

test('(] -> false', () => {
  expect(isValid('(]')).not.toBeTruthy();
});

test('([)]-> false', () => {
  expect(isValid('([)]')).not.toBeTruthy();
});

test('{[]}-> true', () => {
  expect(isValid('{[]}')).toBeTruthy();
});
