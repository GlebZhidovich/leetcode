/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const elem = s[i];
    if (elem !== " ") {
      count++;

      if (s[i - 1] === " ") {
        break;
      }
    }
  }

  return count;
};

const s = "Hello World";

const res = lengthOfLastWord(s);
console.log("🚀 ~ res:", res);
