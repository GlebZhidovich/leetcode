/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length;
  let swap;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (i === n || typeof n === "undefined") {
      continue;
    }

    if (0 < n && n <= len) {
      nums[i] = undefined;
      swap = n;
      while (typeof swap !== "undefined") {
        const cur = nums[swap];
        nums[swap] = swap;

        if (cur !== swap && 0 < cur && cur <= len) {
          swap = cur;
        } else {
          swap = undefined;
        }
      }
    } else {
      nums[i] = undefined;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (typeof n === "undefined") {
      return i;
    }
  }

  return nums.length;
};

// const nums = [1, 2, 0];
// const nums = [3, 4, -1, 1];
// const nums = [7, 8, 9, 11, 12];
const nums = [1];
// const nums = [1, 2, 6, 3, 5, 4];

const res = firstMissingPositive(nums);
console.log("🚀 ~ res:", res);
