/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];

  nums.forEach((n) => {
    n = Math.abs(n);

    const num = nums[n - 1];

    if (num < 0) {
      result.push(n);
    } else {
      nums[n - 1] *= -1;
    }
  });

  return result;
};
