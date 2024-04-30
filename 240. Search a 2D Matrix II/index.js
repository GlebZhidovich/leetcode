/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let t = 0;
  let b = matrix.length - 1;

  while (t < b) {
    const mid = Math.floor((t + b) / 2);
    const l = matrix[mid][matrix[mid].length - 1];

    if (target > l) {
      t = mid + 1;
    } else {
      b = mid;
    }
  }

  while (
    typeof matrix[t] !== "undefined" &&
    matrix[t][0] <= target &&
    matrix[t][matrix[t].length - 1] >= target
  ) {
    let l = 0;
    let r = matrix[t].length - 1;

    while (l < r) {
      const m = Math.floor((l + r) / 2);
      const n = matrix[t][m];

      if (target > n) {
        l = m + 1;
      } else {
        r = m;
      }
    }

    if (matrix[t][l] === target) {
      return true;
    }

    t++;
  }

  return false;
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 26;

const res = searchMatrix(matrix, target);
console.log("🚀 ~ res:", res);
