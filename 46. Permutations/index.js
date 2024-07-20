/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const result = [];
  const stack = [];
  const amountMap = {};

  nums.forEach((n) => {
    amountMap[n] ??= 0;
    amountMap[n]++;
  });

  const len = nums.length;
  nums = Object.keys(amountMap);

  function permuteNums() {
    if (stack.length === len) {
      result.push([...stack]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      stack.push(num);

      if (0 !== amountMap[num]) {
        amountMap[num]--;
        permuteNums(nums);
        amountMap[num]++;
      }

      stack.pop();
    }
  }

  permuteNums();

  return result;
}

const res = permuteUnique([1, 1, 2]);
console.log("🚀 ~ res:", res);
[
  [1, 1, 2],
  [1, 1, 2],
  [1, 2, 1],
  [1, 2, 1],
  [1, 1, 2],
  [1, 1, 2],
  [1, 2, 1],
  [1, 2, 1],
  [2, 1, 1],
  [2, 1, 1],
  [2, 1, 1],
  [2, 1, 1],
].length;
