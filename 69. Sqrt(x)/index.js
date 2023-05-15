/**
 * @param {number} l
 * @param {number} r
 * @param {number} target
 * @return {number}
 */
function binarySearch(l, r, target) {
  while (r > l) {
    const mid = Math.floor((l + r) / 2);
    const midPow2 = mid ** 2;
    if (midPow2 >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  const min = 0;
  const max = 2 ** 31 - 1;
  const res = binarySearch(min, max, x);
  return res ** 2 > x ? res - 1 : res;
};

const res = mySqrt(2 ** 31 - 1);
console.log("🚀 ~ file: index.js:33 ~ res:", res);
