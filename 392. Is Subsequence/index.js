/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) {
    return true;
  }
  let j = -1;
  for (let index = 0; index < t.length; index++) {
    const l = t[index];
    if (l == s[j + 1]) {
      j++;
    }
    if (j == s.length - 1) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const arr = [];
  let j = nums.length - 1;
  for (let index = 0; index <= j; ) {
    const el1 = nums[index] ** 2;
    const el2 = nums[j] ** 2;
    if (el1 < el2) {
      arr.push(el2);
      j--;
    } else {
      arr.push(el1);
      index++;
    }
  }
  arr.forEach((el, i) => (nums[nums.length - 1 - i] = el));
  return nums;
};
const nums = [-4, -1, 0, 3, 10];
const res = sortedSquares(nums);
console.log('🚀 ~ file: index.js:44 ~ res:', res);
