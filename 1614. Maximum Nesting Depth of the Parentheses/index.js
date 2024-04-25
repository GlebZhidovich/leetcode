/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let amount = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const e = s[i];

    if (e === "(") {
      amount++;
      max = Math.max(amount, max);
    }

    if (e === ")") {
      amount--;
    }
  }
  return max;
};
