/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const result = [s[0]];

  for (let i = 1; i < s.length; i++) {
    const cur = s[i];
    const last = result[result.length - 1];

    if (cur !== last && cur.toLowerCase() === last?.toLowerCase()) {
      result.pop();
    } else {
      result.push(cur);
    }
  }

  return result.join("");
};
