/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [[0, []]];
  let deep = 0;
  let num = "";

  for (let i = 0; i < s.length; i++) {
    const sign = s[i];
    if (parseInt(sign) == sign) {
      num += sign;
    } else if (sign === "[") {
      deep++;
      stack[deep] ??= [];
      stack[deep][0] = parseInt(num);
      stack[deep][1] = [];
      num = "";
    } else if (sign === "]") {
      deep--;
    } else {
      stack[deep][1] ??= [];
      stack[deep][1].push(sign);
    }

    if (deep < stack.length - 1) {
      const [n, str] = stack.pop();

      stack[deep][1].push(str.join("").repeat(n));
    }
  }

  return stack[0][1].join("");
};

// "s3[a2[c]m4[f]d]"
// a,

const res = decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef");
console.log("🚀 ~ file: index.js:39 ~ res:", res);
