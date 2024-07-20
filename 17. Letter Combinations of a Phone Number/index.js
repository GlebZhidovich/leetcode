/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const arr = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const result = [];
  const stack = [];
  const len = digits.length;

  function combinations(i) {
    if (stack.length === len) {
      result.push(stack.join(""));
      return;
    }

    const letters = arr[digits[i] - 2];

    for (let j = 0; j < letters.length; j++) {
      const letter = letters[j];
      stack.push(letter);
      combinations(i + 1);
      stack.pop();
    }
  }

  if (digits.length === stack.length) {
    return result;
  }

  combinations(0);

  return result;
}

Promise.resolve().then(() => {
  setTimeout(() => {
    throw new Error();
  });
});
