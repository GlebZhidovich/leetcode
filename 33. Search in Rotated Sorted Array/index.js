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
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

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

  while (r > l) {
    const m = Math.floor((r + l) / 2);

    if (nums[m] === target) {
      return m;
    }
    if (target > nums[0]) {
      if (nums[m] < target && nums[m] >= nums[0]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (nums[m] > target && nums[m] <= nums[nums.length - 1]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return nums[l] === target ? l : -1;
};

const nums = [3, 4, 5, 1, 2],
  target = 4;

const res = search(nums, target);
console.log("🚀 ~ file: index.js:35 ~ res:", res);
