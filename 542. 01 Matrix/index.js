/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let queue = [];
  let next = [];
  let loop = 1;

  const options = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  mat.forEach((arr, i) =>
    arr.forEach((n, j) => {
      if (n === 0) {
        const cors = [i, j];
        queue.push(cors);
      } else {
        mat[i][j] = -1;
      }
    })
  );

  let index = 0;

  while (queue.length) {
    const cors = queue[index];
    options.forEach((op) => {
      const a = cors[0] + op[0];
      const b = cors[1] + op[1];
      if (mat[a] && mat[a][b] === -1) {
        mat[a][b] = loop;
        next.push([a, b]);
      }
    });

    if (index === queue.length - 1) {
      loop++;
      index = 0;
      queue = next;
      next = [];
    } else {
      index++;
    }
  }

  return mat;
};

const res = updateMatrix([[0,0,0],[0,1,0],[1,1,1]]);
console.log("🚀 ~ file: index.js:57 ~ res:", res);
