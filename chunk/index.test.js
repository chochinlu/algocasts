// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = require('./index');

test('[1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]', () => {
  const arr = [1, 2, 3, 4];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4]]);
});

test('[1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5]]);
});

test('[1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]]', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
});

test('[1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 4);

  expect(chunked).toEqual([[1, 2, 3, 4], [5]]);
});

test('[1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 10);

  expect(chunked).toEqual([[1, 2, 3, 4, 5]]);
});
