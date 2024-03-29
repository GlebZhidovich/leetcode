/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let j = 0;

  for (let i = 0; i < nums1.length; i++) {
    const n = nums1[i];

    while (n > nums2[j]) {
      j++;
    }

    if (nums2[j] === undefined) {
      return -1;
    }

    if (n === nums2[j]) {
      return n;
    }
  }

  return -1;
};

const nums1 = [1, 5, 6, 7],
  nums2 = [2, 4];
