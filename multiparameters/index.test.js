const { currySum, endlessCurrySum, argTotal } = require('./index');
describe.skip('curry sum', () => {
  test('(1)(2) === 3', () => {
    expect(currySum(1)(2)).toBe(3);
  });
});

describe('endless curry sum', () => {
  test('argTotal', () => {
    expect(argTotal(1, 2)).toBe(3);
  });

  test('(1)(2) === 3', () => {
    expect(endlessCurrySum(1)(2).getValue()).toBe(3);
  });
  test('(1)(2)(3) === 6', () => {
    expect(endlessCurrySum(1)(2)(3).getValue()).toBe(6);
  });

  test('(1, 2)(3) === 6', () => {
    expect(endlessCurrySum(1, 2)(3).getValue()).toBe(6);
  });

  test('(1)(2,3) === 6', () => {
    expect(endlessCurrySum(1)(2, 3).getValue()).toBe(6);
  });

  test('(1)(2,3)(4) === 10', () => {
    expect(endlessCurrySum(1)(2, 3)(4).getValue()).toBe(10);
  });
});
