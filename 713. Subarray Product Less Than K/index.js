/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;
  if (k === 0) {
    return count;
  }

  let amount = 1;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    amount *= n;

    if (amount < k) {
      count += i - j + 1;
    } else {
      while (j <= i) {
        amount /= nums[j];
        j++;

        if (amount < k) {
          count += i - j + 1;
          break;
        }
      }
    }
  }

  return count;
};

const nums = [10, 5, 2, 6],
  k = 100;
const res = numSubarrayProductLessThanK(nums, k);
console.log("🚀 ~ res:", res);
