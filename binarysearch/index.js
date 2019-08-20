function binarySearch(sortedData, target) {
  let min = 0;
  let max = sortedData.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    // console.log({ min, mid, max });

    if (target === sortedData[mid]) {
      return true;
    }

    if (target < sortedData[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return false;
}

module.exports = binarySearch;
