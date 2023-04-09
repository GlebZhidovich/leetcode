/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const init = "0000";
  let count = 0;

  if (init == target) {
    return count;
  }
  count++;
  const deadendsSet = new Set(deadends);

  if (deadendsSet.has(init)) {
    return -1;
  }

  const visited = new Set();

  let queue = [init];
  let nextQueue = [];
  for (let index = 0; index < queue.length; ) {
    const comb = [...queue[index]];

    for (let index = 0; index < 8; index++) {
      const idx = index % 4;
      const add = index < 4 ? 1 : -1;

      const n = comb
        .map((n, j) => {
          if (idx == j) {
            let next = +n + add;
            if (next < 0) {
              return 9;
            }
            if (next > 9) {
              return 0;
            }
            return next;
          }
          return n;
        })
        .join("");

      if (n == target) {
        return count;
      }

      const isValid = !(visited.has(n) || deadendsSet.has(n));
      if (isValid) {
        visited.add(n);
        nextQueue.push(n);
      }
    }

    if (index == queue.length - 1 && nextQueue.length) {
      index = 0;
      queue = nextQueue;
      nextQueue = [];
      count++;
    } else {
      index++;
    }
  }

  return -1;
};
const deadends = [
  "8887",
  "8889",
  "8878",
  "8898",
  "8788",
  "8988",
  "7888",
  "9888",
];
const target = "8888";

const res = openLock(deadends, target);
console.log("🚀 ~ file: index.js:58 ~ res:", res);
