/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let num of nums) {
    let index = Math.abs(num);
    nums[index] *= -1;
    if (nums[index] >= 0) {
      return Math.abs(num);
    }
  }
};
