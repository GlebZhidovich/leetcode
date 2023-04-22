/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
var guess = function (num) {};
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 0;
  let r = n;

  while (r > l) {
    const mid = Math.floor((l + r) / 2);
    const res = guess(mid);
    if (res == -1) {
      r = mid;
    } else if (res == 1) {
      l = mid;
    } else {
      return mid;
    }
  }
  return l;
};
