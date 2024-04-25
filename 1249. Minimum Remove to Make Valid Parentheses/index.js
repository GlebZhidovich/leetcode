/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const remove = new Set();

  for (let i = 0; i < s.length; i++) {
    const elem = s[i];

    if (elem === ")") {
      if (stack.length !== 0) {
        stack.pop();
      } else {
        remove.add(i);
      }
    }
    if (elem === "(") {
      stack.push(i);
    }
  }

  if (stack.length !== 0) {
    stack.forEach((i) => {
      remove.add(i);
    });
  }

  const result = [];

  for (let i = 0; i < s.length; i++) {
    const elem = s[i];

    if (!remove.has(i)) {
      result.push(elem);
    }
  }

  return result.join("");
};
