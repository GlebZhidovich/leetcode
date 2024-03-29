/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const map = {};
  let j = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    map[n] ??= 0;
    map[n]++;

    if (map[n] > k) {
      while (nums[j] !== n) {
        map[nums[j]]--;
        j++;
      }
      map[nums[j]]--;
      j++;
    }

    max = Math.max(i - j + 1, max);
  }

  return max;
};
const nums = [1, 2, 2, 1, 3],
  k = 1;
maxSubarrayLength(nums, k);
