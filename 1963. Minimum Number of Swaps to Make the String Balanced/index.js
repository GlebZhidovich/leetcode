/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  s = s.split("");
  let count = 0;
  const stackR = [];
  const stackL = [];

  let r = s.length - 1;
  for (let l = 0; l <= r; l++) {
    const bL = s[l];

    if (bL === "]") {
      if (stackL.length === 0) {
        while (r > l) {
          const bR = s[r];

          if (bR === "[") {
            if (stackR.length === 0) {
              count++;
              stackL.push(0);
              [s[l], s[r]] = [s[r], s[l]];
              break;
            } else {
              stackR.pop();
            }
          } else {
            stackR.push(0);
          }
          r--;
        }
      } else {
        stackL.pop();
      }
    } else {
      stackL.push(0);
    }
  }

  return count;
};
const s = "]]][[[";
const res = minSwaps(s);
console.log("🚀 ~ res:", res);
