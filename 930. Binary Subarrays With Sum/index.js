/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let total = 0;
  let sum = 0;
  const map = {};
  nums.forEach((n) => {
    sum += n;
    if (sum === goal) {
      total++;
    }
    const dif = sum - goal;

    if (dif in map) {
      total += map[dif];
    }

    map[sum] ??= 0;
    map[sum]++;
  });

  return total;
};
const nums = [1, 0, 1, 0, 1],
  goal = 2;

const res = numSubarraysWithSum(nums, goal);
console.log("🚀 ~ res:", res);
