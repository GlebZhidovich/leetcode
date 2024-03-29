/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  let result = 0;

  arr.sort((a, b) => b - a);

  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[j];

    if ((i + 1) % k === 0) {
      j++;
    }
  }

  return result;
};

const result = [
  [[1, 15, 7, 9, 2, 5, 10], 3],
  [[1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4],
  [[1], 1],
].map((args) => {
  return maxSumAfterPartitioning(...args);
});
console.log("🚀 ~ result:", result);
