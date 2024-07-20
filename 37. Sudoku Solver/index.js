/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const y = 0,
    x = 0;
  try {
    solve(board, y, x);
  } catch {
    return board;
  }
};

function solve(board, y, x) {
  while (y < board.length) {
    while (x < board.length) {
      const cell = board[y][x];
      if (cell === ".") {
        for (let i = 1; i < 10; i++) {
          const num = `${i}`;
          const valid = isValid(board, num, y, x);
          if (valid) {
            board[y][x] = num;
            const res = solve(board, y, x);
            if (res) {
              return res;
            }
            board[y][x] = ".";
          }
        }

        return false;
      }
      x++;
    }
    y++;
    x = 0;
  }

  throw Error;
}

function isValid(board, n, y, x) {
  for (let i = 0; i < board.length; i++) {
    const cell = board[i][x];

    if (cell === n) {
      return false;
    }
  }

  for (let i = 0; i < board.length; i++) {
    const cell = board[y][i];

    if (cell === n) {
      return false;
    }
  }

  const corsY = getSquareCors(y);
  const corsX = getSquareCors(x);

  for (let i = corsY[0]; i < corsY[1]; i++) {
    for (let j = corsX[0]; j < corsX[1]; j++) {
      const cell = board[i][j];
      if (cell === n) {
        return false;
      }
    }
  }

  return true;
}

function getSquareCors(pos) {
  if (pos < 3) {
    return [0, 3];
  }
  if (pos < 6) {
    return [3, 6];
  }
  return [6, 9];
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const res = solveSudoku(board);
console.log("🚀 ~ res:", res);
