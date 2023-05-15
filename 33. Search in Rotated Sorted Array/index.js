/**
 * @param {number} l
 * @param {number} r
 * @param {number} target
 * @return {number}
 */
function binarySearch(l, r, nums, target) {
  while (r > l) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
function getLowest(nums, l, r) {
  while (r > l) {
    const mid = Math.floor((l + r) / 2);
    const num = nums[mid];
    const numL = nums[mid - 1] ?? 0;
    const numR = nums[mid + 1];
    if (numL > num && numR > num) {
      return mid;
    } else if (num >= nums[0] && numL < num) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  if (nums.length === 2) {
    if (nums[0] === target) {
      return 0;
    }
    if (nums[1] === target) {
      return 1;
    }
    return -1;
  }

  if (nums[l] > target && nums[r] < target) {
    return -1;
  }

  if (nums[l] === target) {
    return l;
  }
  if (nums[r] === target) {
    return r;
  }

  if (nums[l] < nums[r]) {
    const idx = binarySearch(l, r, nums, target);
    return nums[idx] === target ? idx : -1;
  }

  const lowestIdx = getLowest(nums, l, r);
  let idx;
  if (nums[l] < target) {
    idx = binarySearch(l, lowestIdx - 1, nums, target);
    return nums[idx] === target ? idx : -1;
  } else {
    idx = binarySearch(lowestIdx, r, nums, target);
  }
  return nums[idx] === target ? idx : -1;
};

const nums = [5, 1, 2, 3, 4],
  target = 1;

const res = search(nums, target);
console.log("🚀 ~ file: index.js:35 ~ res:", res);
