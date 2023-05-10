/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let result = 0;
  nums[0] *= -1;
  const stack = [{ arr: nums, sign: "-", status: "new" }];

  while (stack.length) {
    const curIndex = stack.length - 1;
    const last = stack[curIndex];
    const prevIndex = curIndex - 1;

    if (nums.length === stack.length) {
      const { arr } = stack.pop();
      const sum = arr.reduce((acc, cur) => acc + cur);
      arr[arr.length - 1] *= -1;
      const sum2 = arr.reduce((acc, cur) => acc + cur);
      [sum, sum2].forEach((n) => {
        if (n === target) {
          result++;
        }
      });
      if (prevIndex < 0) {
        stack.pop();
      } else {
        stack[prevIndex].status = "old";
      }
    } else if (last.status === "new") {
      const nextNums = last.arr.slice();
      nextNums[curIndex + 1] *= -1;

      stack.push({ arr: nextNums, sign: "-", status: "new" });
    } else {
      if (last.sign === "-") {
        last.arr[curIndex] *= -1;
        last.sign = "+";
        last.status = "new";
      } else {
        if (prevIndex < 0) {
          stack.pop();
        } else {
          stack.pop();
          stack[prevIndex].status = "old";
        }
      }
    }
  }

  return result;
};

// const nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
const nums = [
    18, 50, 26, 2, 15, 14, 14, 2, 42, 43, 38, 44, 24, 17, 19, 25, 3, 10, 42, 20,
  ],
  target = 24;

const res = findTargetSumWays(nums, target);
console.log("🚀 ~ file: index.js:47 ~ res:", res);

// Recursion

/**
 * @param {number[]} nums
 * @param {number} index
 * @param {number} sum
 * @param {number} target
 * @return {number}
 */
function backtrack(nums, index, sum, target) {
  if (index === nums.length) {
    console.log("🚀 ~ file: index.js:56 ~ backtrack ~ sum:", sum);
    return sum === target ? 1 : 0;
  }
  return (
    backtrack(nums, index + 1, sum + nums[index], target) +
    backtrack(nums, index + 1, sum - nums[index], target)
  );
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWaysRec = function (nums, target) {
  return backtrack(nums, 0, 0, target);
};

// const res2 = findTargetSumWaysRec(nums, target);
// console.log("🚀 ~ file: index.js:47 ~ res:", res2);

var a = () => {
  console.log(this);
};

typeof a.call({ a: 1 });
