/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let max = 0;
  let count = 0;
  let stack = [];
  height.forEach((n) => {
    if (stack.length > 0 && n > max) {
      const min = Math.min(max, n);
      while (n > stack[stack.length - 1]) {
        count += min - stack.pop();
      }
    }
    stack.push(n);

    max = Math.max(max, n);
  });

  let rightMax = 0;

  while (stack.length > 0) {
    const n = stack.pop();
    rightMax = Math.max(n, rightMax);
    count += rightMax - n;
  }

  return count;
};
