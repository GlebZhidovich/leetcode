/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) {
    return 1;
  }

  const sums = [0];
  const nums = [0];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
    sums.push(i + sums[sums.length - 1]);
  }

  let l = 1;
  let r = sums.length - 1;
  let result = -1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    const sum = sums[m];
    const num = nums[m];
    const right = sums[sums.length - 1] - sum + num;

    if (right === sum) {
      result = nums[m];
      break;
    }

    if (right > sum) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return result;
};

const res = pivotInteger(2);
console.log("🚀 ~ res:", res);
