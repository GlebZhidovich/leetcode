/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let star = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (e === "*") {
      star++;
    } else if (e === ")") {
      if (left > 0) {
        left--;
      } else if (star > 0) {
        star--;
      } else {
        return false;
      }
    } else {
      left++;
    }
  }

  let res = left <= star;

  star = 0;
  let right = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const e = s[i];
    if (e === "*") {
      star++;
    } else if (e === "(") {
      if (right > 0) {
        right--;
      } else if (star > 0) {
        star--;
      } else {
        return false;
      }
    } else {
      right++;
    }
  }

  return res && right <= star;
};

const s = "(((((*(*********((*(((((****";
//   "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())";
// const s =
//   "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()";
const result = checkValidString(s);
console.log("🚀 ~ result:", result);
