/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const elem = s[i];
    if (elem === ")") {
      const arr = [];

      let l = stack.pop();

      while (l !== "(") {
        arr.push(l);
        l = stack.pop();
      }

      arr.forEach((e) => stack.push(e));
    } else {
      stack.push(elem);
    }
  }

  return stack.join("");
};
