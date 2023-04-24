/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (r > l) {
    const difH = Math.min(height[l], height[r]);
    const difW = r - l;
    const amount = difH * difW;
    max = Math.max(amount, max);

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return max;
};

const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("🚀 ~ file: index.js:26 ~ res:", res);
