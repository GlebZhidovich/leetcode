/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length < 0) {
    return 0;
  }
  const numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numsSet.has(num)) {
      numsSet.delete(num);
    } else {
      numsSet.add(num);
    }
  }
  return [...numsSet][0];
};

const res = singleNumber([4, 1, 2, 1, 2]);
console.log("🚀 ~ file: index.js:17 ~ res:", res);
