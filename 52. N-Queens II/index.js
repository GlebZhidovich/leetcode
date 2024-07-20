/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const field = new Array(n).fill(0).map(() => new Array(n).fill(false));

  return count(0, n, field);
};

function count(row, n, field) {
  if (n === row) {
    return 1;
  }

  let amount = 0;

  for (let col = 0; col < n; col++) {
    if (isValid(field, row, col)) {
      field[row][col] = true;
      amount += count(row + 1, n, field);
      field[row][col] = false;
    }
  }

  return amount;
}

function isValid(field, row, col) {
  const actions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],

    // [0, 1],
    // [1, 1],
    // [1, 0],
    // [1, -1],
    // [0, -1],
  ];

  for (let i = 0; i < actions.length; i++) {
    const [a, b] = actions[i];
    let c = row + a;
    let f = col + b;

    while (typeof field[c]?.[f] !== "undefined") {
      if (field[c][f]) {
        return false;
      }

      c += a;
      f += b;
    }
  }

  return true;
}

const res = totalNQueens(1);
console.log("🚀 ~ res:", res);
