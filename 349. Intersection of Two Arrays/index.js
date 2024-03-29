/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = [];
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  if (nums2.size < nums1.size) {
    nums2.forEach((n) => {
      if (nums1.has(n)) {
        result.push(n);
      }
    });
  } else {
    nums1.forEach((n) => {
      if (nums2.has(n)) {
        result.push(n);
      }
    });
  }

  return result;
};
