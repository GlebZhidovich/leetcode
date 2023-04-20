/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (r > l) {
    const mid = Math.floor((r + l) / 2);
    const cur = nums[mid];
    if (target <= cur) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return nums[l] == target ? l : -1;
};

const res = search([-1, 0, 3, 5, 9, 12], 3);
console.log("🚀 ~ file: index.js:23 ~ res:", res);
