function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (r > l) {
    const mid = Math.floor((r + l) / 2);

    if (arr[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) {
    return nums;
  }
  const result = [];

  if (k === 2) {
    for (let index = 0; index < nums.length - k + 1; index++) {
      const arr = nums.slice(index, index + k);
      if (k === 2) {
        result.push((arr[0] + arr[1]) / 2);
      }
    }

    return result;
  }

  const arr = nums.slice(0, k);
  arr.sort((a, b) => a - b);
  result.push(arr.at(-1));

  for (let index = 1; index < nums.length - k + 1; index++) {
    const prev = nums[index - 1];
    const next = nums[index + k - 1];

    const prevIdx = binarySearch(arr, prev);
    arr.splice(prevIdx, 1);
    if (next >= arr.at(-1)) {
      arr.push(next);
    } else if (next <= arr[0]) {
      arr.unshift(next);
    } else {
      const nextIdx = binarySearch(arr, next);
      arr.splice(nextIdx, 0, next);
    }

    result.push(arr.at(-1));
  }

  return result;
};

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const sorted = [-3, -1, 1, 3, 3, 5, 6, 7];
const res = maxSlidingWindow(arr, 3);
console.log("🚀 ~ file: index.js:75 ~ res:", res);

// const r = binarySearch(sorted, 4);
// sorted.splice(r, 0, 4);
// console.log("🚀 ~ file: index.js:53 ~ r:", sorted);
