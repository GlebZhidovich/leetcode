/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  const store1 = new Map();
  const store2 = new Set();

  for (let index = 0; index < s.length; index++) {
    const l1 = s[index];
    const l2 = t[index];

    if (store1.has(l1)) {
      const prev = store1.get(l1);
      if (l2 !== prev) {
        return false;
      }
    } else if (store2.has(l2)) {
      return false;
    } else {
      store1.set(l1, l2);
      store2.add(l2);
    }
  }
  return true;
};

const res = isIsomorphic("bbbaaaba", "aaabbbba");
