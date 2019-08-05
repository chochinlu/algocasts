const fib = require('./index');

test('2 -> 1', () => {
  expect(fib(2)).toBe(1);
});

test('3 -> 2', () => {
  expect(fib(3)).toBe(2);
});

test('4 -> 3', () => {
  expect(fib(4)).toBe(3);
});
