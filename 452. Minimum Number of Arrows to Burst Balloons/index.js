/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let cur = points[0];
  let count = 1;

  for (let i = 1; i < points.length; i++) {
    const point = points[i];

    if (point[0] > cur[1]) {
      cur = point;
      count++;
    } else {
      cur[1] = Math.min(cur[1], point[1]);
    }
  }

  return count;
};

const points = [
  [0, 9],
  [0, 6],
  [2, 9],
  [2, 8],
  [3, 9],
  [3, 8],
  [3, 9],
  [6, 8],
  [7, 12],
  [9, 10],
];

const res = findMinArrowShots(points);
console.log("🚀 ~ res:", res);
