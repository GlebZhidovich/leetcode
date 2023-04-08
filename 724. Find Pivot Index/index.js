/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sums = [0];
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    sums.push(num + sums[index]);
  }

  for (let index = 1; index < sums.length; index++) {
    const left = sums[index - 1];
    const sum = sums[index];
    const right = sums[sums.length - 1] - sum;
    if (left == right) {
      return index - 1;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
