/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target = 0) {
  if (nums.length < 3) {
    return [];
  }
  if (nums.length === 3) {
    const sum = nums.reduce((acc, cur) => acc + cur);
    return sum === target ? [nums] : [];
  }
  nums.sort((a, b) => a - b);
  const result = [];

  let i = 0;
  let j = i + 1;
  let s = nums.length - 1;

  while (i < s) {
    const a = nums[i];
    if (a === nums[i - 1]) {
      i++;
      j++;
    } else {
      const b = nums[j];
      const c = nums[s];
      const sum = a + b + c;

      const prevJ = j - 1 === i ? null : nums[j - 1];
      if (prevJ === b) {
        j++;
        continue;
      }
      if (nums[s + 1] === c) {
        s--;
        continue;
      }
      if (sum < target) {
        if (j === s - 1) {
          i++;
          j = i;
        }
        j++;
      } else if (sum > target) {
        j = i + 1;
        s--;
      } else {
        result.push([a, b, c]);
        if (j === s - 1) {
          i++;
          j = i + 1;
        } else {
          s--;
        }
      }
    }
  }

  return result;
};
const nums = [-1,1,-1,1],
  target = 0;
const res = threeSum(nums, target);
console.log("🚀 ~ file: index.js:26 ~ res:", res);
