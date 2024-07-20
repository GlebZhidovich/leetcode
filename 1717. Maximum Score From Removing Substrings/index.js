/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function maximumGain(s, x, y) {
  let count = 0;
  const subs = [
    ["a", "b", x],
    ["b", "a", y],
  ];

  let subIndex = x > y ? 0 : 1;

  let arr = s;

  let stack = [];

  for (let j = 0; j < 2; j++) {
    let i = 0;

    while (i < arr.length) {
      const letter = arr[i];
      stack.push(letter);

      while (
        stack[stack.length - 1] === subs[subIndex][0] &&
        arr[i + 1] === subs[subIndex][1]
      ) {
        count += subs[subIndex][2];
        stack.pop();
        i++;
      }

      i++;
    }

    subIndex = subIndex === 1 ? 0 : 1;
    arr = stack;
    stack = [];
  }

  return count;
}
const s = "cdbcbbaaabab",
  x = 4,
  y = 5;
maximumGain(s, x, y);
