/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let count = 0;
  const map = {
    [count]: -1,
  };
  let len = 0;
  nums.forEach((n, i) => {
    count += n === 0 ? -1 : 1;

    if (count in map) {
      const j = map[count];
      len = Math.max(len, i - j);
    } else {
      map[count] = i;
    }
  });

  return len;
};

const nums = [0];
const res = findMaxLength(nums);
console.log("🚀 ~ res:", res);
