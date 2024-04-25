/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const options = [
    [0, 1],
    [1, 0],
    // [0, -1],
    // [-1, 0],
  ];

  const result = [];

  for (let i = 0; i < land.length; i++) {
    const row = land[i];
    for (let j = 0; j < row.length; j++) {
      const n = row[j];

      if (n === 1) {
        const cors = [i, j];
        result.push(cors);
        land[i][j] = 0;
        let queue = [cors];
        let nextQueue = [];
        let maxY = i;
        let maxX = j;
        while (queue.length !== 0) {
          for (let m = 0; m < queue.length; m++) {
            const [i, j] = queue[m];

            options.forEach(([a, b]) => {
              const y = i + a;
              const x = j + b;

              if (land[y] && land[y][x] === 1) {
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
                land[y][x] = 0;
                nextQueue.push([y, x]);
              }
            });
          }
          queue = nextQueue;
          nextQueue = [];
        }
        result[result.length - 1].push(maxY, maxX);
      }
    }
  }

  return result;
};
