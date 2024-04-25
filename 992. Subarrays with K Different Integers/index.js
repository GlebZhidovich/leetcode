/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  const map = new Map();
  let amount = 0;
  let s = 0;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    const r = map.get(n);

    if (typeof r === "undefined") {
      map.set(n, 1);
    } else {
      map.set(n, r + 1);
    }

    while (map.size > k) {
      const count = map.get(nums[j]);
      if (count === 1) {
        map.delete(nums[j]);
      } else {
        map.set(nums[j], count - 1);
      }
      j++;
      s = j;
    }

    if (map.size === k) {
      amount++;

      let num = map.get(nums[j]);

      while (typeof num !== "undefined") {
        if (num === 1) {
          num = undefined;
        } else {
          map.set(nums[j], num - 1);
          j++;
          num = map.get(nums[j]);
        }
      }

      amount += j - s;
    }
  }

  return amount;
};

const nums = [1, 2, 1, 3, 4],
  k = 3;

const result = subarraysWithKDistinct(nums, k);
console.log("🚀 ~ result:", result);
