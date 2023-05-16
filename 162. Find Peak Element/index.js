/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (r > l) {
    const m = Math.floor((r + l) / 2);
    const mid = nums[m];
    const left = nums[m - 1] ?? -Infinity;
    const right = nums[m + 1] ?? -Infinity;
    if (mid > right && mid > left) {
      return m;
    }
    if (mid > left) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
};

const nums = [2, 3];

const res = findPeakElement(nums);
console.log("🚀 ~ file: index.js:30 ~ res:", res);
