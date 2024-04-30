/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length > 1) {
    const mid = Math.round(nums.length / 2);
    const arr1 = sortArray(nums.slice(0, mid));
    const arr2 = sortArray(nums.slice(mid, nums.length));
    return merge(arr1, arr2);
  }

  return nums;
};

function merge(arr1, arr2) {
  const res = [];

  const len = arr1.length + arr2.length;

  for (let i = 0, j = 0; i + j < len; ) {
    const e1 = arr1[i] ?? Number.MAX_VALUE;
    const e2 = arr2[j] ?? Number.MAX_VALUE;

    if (e1 < e2) {
      res.push(e1);
      i++;
    } else {
      res.push(e2);
      j++;
    }
  }

  return res;
}
