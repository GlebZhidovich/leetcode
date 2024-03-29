/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    max = Math.max(n, max);
  }

  let result = 0;

  const amount = [];

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === max) {
      amount.push(i);

      if (amount.length - j > k) {
        j++;
      }
    }

    if (amount.length - j === k) {
      const l = amount[j];
      result += 1 + l;
    }
  }

  return result;
};
