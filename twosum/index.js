const twoSumValue = (nums, target) => {
  let set = new Set();

  for (const x of nums) {
    if (set.has(target - x)) {
      return [target - x, x];
    } else {
      set.add(x);
    }
  }

  return [];
};

const twoSumIndex = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];

    if (map.has(target - x)) {
      return [map.get(target - x), i];
    } else {
      map.set(x, i);
    }
  }

  return [];
};

module.exports = { twoSumValue, twoSumIndex };
