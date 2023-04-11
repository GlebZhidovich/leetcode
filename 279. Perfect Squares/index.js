/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let count = 1;
  if (Math.sqrt(n) === parseInt(Math.sqrt(n))) {
    return count;
  }
  count++;
  let perfect = [];

  for (let index = 1; index < n; index++) {
    const num = index ** 2;
    if (num > n) {
      break;
    } else {
      perfect.push(num);
    }
  }

  let queue = perfect.map((p) => n - p);
  let nextQueue = new Set();

  for (let i = 0; i < queue.length; ) {
    const elem = queue[i];
    const isPerfect = Math.sqrt(elem) === parseInt(Math.sqrt(elem));
    if (isPerfect) {
      return count;
    } else {
      for (let j = 0; j < perfect.length; j++) {
        const element = perfect[j];
        if (elem < element) {
          break;
        } else {
          nextQueue.add(elem - element);
        }
      }
    }

    if (i == queue.length - 1 && nextQueue.size) {
      queue = [...nextQueue];
      nextQueue.clear();
      i = 0;
      count++;
    } else {
      i++;
    }
  }

  return count;
};

const res = numSquares(9999);
console.log("🚀 ~ file: index.js:53 ~ res:", res);
