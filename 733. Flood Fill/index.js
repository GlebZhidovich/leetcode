/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const curColor = image[sr][sc];

  if (color === curColor) {
    return image;
  }

  const options = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let queue = [[sr, sc]];
  let next = [];
  let index = 0;

  while (queue.length) {
    const cors = queue[index];
    image[cors[0]][cors[1]] = color;

    options.forEach((c) => {
      const a = cors[0] + c[0];
      const b = cors[1] + c[1];
      if (image[a] && image[a][b] === curColor) {
        next.push([a, b]);
      }
    });

    index++;

    if (index === queue.length) {
      if (next.length) {
        queue = next;
        next = [];
        index = 0;
      } else {
        queue = next;
      }
    }
  }

  return image;
};

const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;
const res = floodFill(image, sr, sc, color);
console.log("🚀 ~ file: index.js:53 ~ res:", res);
