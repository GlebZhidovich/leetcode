/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = [];
  const stack = [];

  temperatures.forEach((n, i) => {
    if (!stack.length) {
      stack.push([n, i]);
    } else {
      const last = stack.at(-1);
      if (last[0] < n) {
        for (let index = stack.length - 1; index >= 0; index--) {
          const arr = stack[index];
          if (arr[0] < n) {
            const val = stack.pop();
            result[val[1]] = i - val[1];
          } else {
            break;
          }
        }
      }
      stack.push([n, i]);
    }
  });
  stack.forEach((arr) => {
    result[arr[1]] = 0;
  });
  return result;
};

const res = dailyTemperatures([30, 60, 90]);
console.log("🚀 ~ file: index.js:36 ~ res:", res);
