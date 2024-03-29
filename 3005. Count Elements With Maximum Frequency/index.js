/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let count = 0;
  let store = {};
  let max = 0;

  nums.forEach((num) => {
    store[num] ??= 0;
    store[num]++;
    max = max > store[num] ? max : store[num];
  });

  for (const key in store) {
    if (store[key] === max) {
      count += max;
    }
  }

  return count;
};

maxFrequencyElements([10, 12, 11, 9, 6, 19, 11]);
