/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const stack = ["("];

  generate(n, result, stack, 1, 0);

  return result;
};

function generate(n, result, stack, open, close) {
  if (stack.length === n * 2) {
    if (isValid(stack)) {
      result.push(stack.join(""));
    }
    return;
  }

  const brackets = [];

  if (open < n) {
    brackets.push("(");
  }

  if (close < n) {
    brackets.push(")");
  }

  for (let i = 0; i < brackets.length; i++) {
    const b = brackets[i];
    if (b === "(") {
      stack.push(b);
      generate(n, result, stack, open + 1, close);
      stack.pop(b);
    } else {
      stack.push(b);
      generate(n, result, stack, open, close + 1);
      stack.pop(b);
    }
  }
}

function isValid(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const b = arr[i];

    if (b === "(") {
      count++;
    } else {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count === 0;
}
