const { twoSumValue, twoSumIndex } = require('./index');

describe('twoSumValue', () => {
  test('[2, 7, 11, 15], 9 --> [2,7]', () => {
    expect(twoSumValue([2, 7, 11, 15], 9)).toEqual([2, 7]);
  });
});

describe('twoSumIndex', () => {
  test('[2, 7, 11, 15], 9 --> [0,1]', () => {
    expect(twoSumIndex([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
