/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let maxXOR = 0;
  let mask = 0;

  for (let i = 31; i >= 0; i--) {
      mask |= (1 << i);

      const prefixes = new Set();
      for (const num of nums) {
          prefixes.add(num & mask);
      }

      const candidateXOR = maxXOR | (1 << i);

      for (const prefix of prefixes) {
          if (prefixes.has(candidateXOR ^ prefix)) {
              maxXOR = candidateXOR;
              break;
          }
      }
  }

  return maxXOR;
};

const nums = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]; // 62
const res = findMaximumXOR(nums);

console.log("🚀 ~ res:", res);
