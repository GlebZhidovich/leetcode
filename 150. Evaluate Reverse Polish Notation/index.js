/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const actions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => parseInt(a / b),
  };

  const stack = [];

  tokens.forEach((s) => {
    if (s in actions) {
      const b = stack.pop();
      const a = stack.pop();
      const res = actions[s](a, b);
      stack.push(res);
    } else {
      stack.push(+s);
    }
  });
  return stack[0];
};

const res = evalRPN(["4","13","5","/","+"]);
console.log("🚀 ~ file: index.js:30 ~ res:", res);
