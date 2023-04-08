/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const q = [];
  grid.forEach((row, i) => {
    row.forEach((n, j) => {
      if (n === "1") {
        q.push([i, j]);
      }
    });
  });

  const options = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const visited = new Set();

  let count = 0;

  for (let i = 0; i < q.length; i++) {
    const cors = q[i];
    const t = `${cors[0]} ${cors[1]}`;

    if (!visited.has(t)) {
      count++;
      visited.add(t);
      let queue = [cors];
      let nextQueue = [];

      for (let index = 0; index < queue.length; ) {
        const [i, j] = queue[index];

        options.forEach(([a, b]) => {
          const y = i + a;
          const x = j + b;
          if (grid[y] && grid[y][x] === "1") {
            const key = `${y} ${x}`;
            if (!visited.has(key)) {
              visited.add(key);
              nextQueue.push([y, x]);
            }
          }
        });

        if (index == queue.length - 1 && nextQueue.length) {
          index = 0;
          queue = nextQueue;
          nextQueue = [];
        } else {
          index++;
        }
      }
    }
  }

  return count;
};

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
const res = numIslands(grid);
console.log("🚀 ~ file: index.js:17 ~ res:", res);
