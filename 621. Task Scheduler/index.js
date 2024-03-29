/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let result = 0;
  const map = {};

  tasks.forEach((task) => {
    map[task] ??= 0;
    map[task]++;
  });

  let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);

  let j = 1000;

  while (sorted.length > 0) {
    if (j < n) {
      result += n - j;
    }
    j = -1;

    for (let i = 0; i < sorted.length; i++) {
      const task = sorted[i];
      map[task]--;

      if (map[task] === 0) {
        delete map[task];
      }

      result++;
      j++;

      if (j === n) {
        break;
      }
    }

    sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
  }

  return result;
};
const tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2;
const res = leastInterval(tasks, n);
console.log("🚀 ~ res:", res);
