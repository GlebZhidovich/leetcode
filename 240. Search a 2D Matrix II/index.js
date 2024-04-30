/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row = rowBinarySearch(matrix, target, row, col);
    } else {
      col = colBinarySearch(matrix[row], target, col);
    }
  }
  return false;
};

function rowBinarySearch(arr, target, l, col) {
  let r = arr.length;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    const n = arr[m][col];

    if (target > n) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

function colBinarySearch(arr, target, r) {
  let l = -1;

  while (l < r) {
    const m = Math.ceil((l + r) / 2);
    const n = arr[m];

    if (target < n) {
      r = m - 1;
    } else {
      l = m;
    }
  }

  return l;
}

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 20;

const res = searchMatrix(matrix, target);
console.log("🚀 ~ res:", res);
