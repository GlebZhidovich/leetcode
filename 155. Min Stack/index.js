/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const open = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const close = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const b = s[i];
    const isClose = Boolean(close[b]);

    if (isClose) {
      if (stack.length) {
        const last = stack.pop();
        if (open[last] != b) {
          return false;
        }
      } else {
        return false;
      }
    } else {
      stack.push(b);
    }
  }

  return !stack.length;
};

const s = "()[]}";

const res = isValid(s);
console.log("🚀 ~ file: index.js:43 ~ res:", res);
