/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (s[left] === s[right] && left < right) {
    const l = s[left];
    for (let i = left + 1; i < right; i++) {
      if (l === s[i]) {
        left++;
      } else {
        break;
      }
    }
    for (let i = right - 1; i > left; i--) {
      if (l === s[i]) {
        right--;
      } else {
        break;
      }
    }

    left++;
    right--;
  }

  return right - left + 1;
};

const res = minimumLength("cabaaaabac");
console.log("🚀 ~ res:", res);
