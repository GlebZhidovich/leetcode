/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let map = new Map();
  let r = 0;
  let l = 0;

  let amount = 0;
  const limit = new Set([minK, maxK]);

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (n > maxK || n < minK) {
      map = new Map();
      r = l = i + 1;
      continue;
    }

    if (limit.has(n)) {
      const count = map.get(n);
      if (typeof count === "undefined") {
        map.set(n, 1);
      } else {
        map.set(n, count + 1);
      }
    }

    if (map.size === limit.size) {
      while (true) {
        if (limit.has(nums[r])) {
          const count = map.get(nums[r]);
          if (count === 1) {
            break;
          } else {
            map.set(nums[r], count - 1);
          }
        }
        r++;
      }
      amount += 1 + r - l;
    }
  }

  return amount;
};

// const nums = [1, 3, 5, 2, 7, 5],
//   minK = 1,
//   maxK = 5;

const nums = [1, 1, 1, 1],
  minK = 1,
  maxK = 1;

const result = countSubarrays(nums, minK, maxK);
console.log("🚀 ~ result:", result);
