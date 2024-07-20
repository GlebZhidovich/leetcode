/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const obj = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    arr.push(obj[letter]);
  }

  shifts.forEach(([start, end, direction]) => {
    for (let j = start; j <= end; j++) {
      arr[j] += direction === 0 ? -1 : 1;
      if (arr[j] < 0) {
        arr[j] = 25;
      }

      if (arr[j] > 25) {
        arr[j] = 0;
      }
    }
  });

  return arr.reduce((acc, val) => {
    return acc + alphabet[val];
  }, "");
};
