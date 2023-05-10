function isValid(s) {
  const brackets = "()";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const sym = s[i];
    if (brackets.includes(sym)) {
      const isLeft = brackets[0] === sym;
      if (isLeft) {
        stack.push(sym);
      } else {
        if (stack.length) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return !stack.length;
}

function getValid(s) {
  let result = [];
  const brackets = "()";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const sym = s[i];
    if (brackets.includes(sym)) {
      const isLeft = brackets[0] === sym;
      if (isLeft) {
        stack.push(sym);
        result.push(sym);
      } else {
        if (stack.length) {
          stack.pop();
          result.push(sym);
        }
      }
    } else {
      result.push(sym);
    }
  }

  if (stack.length) {
    result = result
      .reduceRight((acc, cur) => {
        if (cur === stack[0]) {
          stack.pop();
        } else {
          acc.push(cur);
        }
        return acc;
      }, [])
      .reverse();
  }

  return result.join("");
}

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  if (isValid(s)) {
    return [s];
  }

  const valid = getValid(s);
  const brackets = "()";

  if (valid.length === 0) {
    return [""];
  }

  if (valid.length === 2) {
    return [brackets];
  }

  const result = [];
  let cur = new Set([s]);
  let next = new Set();
  while (cur.size) {
    cur.forEach((str) => {
      const options = [];

      for (let i = 0; i < str.length; i++) {
        const el = str[i];
        for (let j = 0; j < str.length; j++) {
          options[j] ??= [];
          if (brackets.includes(el)) {
            if (i !== j) {
              options[j].push(el);
            }
          } else {
            options[j].push(el);
          }
        }
      }

      options.forEach((arr) => {
        next.add(arr.join(""));
      });
    });

    if (next.has(valid)) {
      next.forEach((val) => {
        if (isValid(val)) {
          result.push(val);
        }
      });
    }

    if (result.length) {
      return result;
    }
    cur = next;
    next = new Set();
  }

  return result;
};

const res = removeInvalidParentheses("()())()");
console.log("🚀 ~ file: index.js:33 ~ res:", res);
