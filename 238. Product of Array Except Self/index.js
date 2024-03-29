/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];

  const pre = [1];
  const post = [1];

  for (let i = 0; i < nums.length; i++) {
    const l = nums[i];
    const r = nums[nums.length - 1 - i];
    pre.push(l * pre[pre.length - 1]);
    post.push(r * post[post.length - 1]);
  }
  post.reverse();
  for (let i = 0; i < pre.length - 1; i++) {
    const preN = pre[i];
    const postN = post[i + 1];
    result.push(preN * postN);
  }

  return result;
};
const nums = [-1, 1, 0, -3, 3];
const res = productExceptSelf(nums);
console.log("🚀 ~ res:", res);
