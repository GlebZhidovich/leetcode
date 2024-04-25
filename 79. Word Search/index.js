/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const visited = new Set();
      const s = row[j];
      if (s === word[0]) {
        visited.add(i + "," + j);
        const result = search(board, word, i, j, 1, visited);
        if (result) {
          return true;
        }
      }
    }
  }

  return false;
};

function search(board, word, i, j, k, visited) {
  if (k === word.length) {
    return true;
  }

  const cors = [
    [i, j + 1],
    [i - 1, j],
    [i, j - 1],
    [i + 1, j],
  ];

  for (let l = 0; l < cors.length; l++) {
    const [m, n] = cors[l];
    const cur = word[k];
    const boardCur = board[m] && board[m][n];
    if (cur === boardCur && !visited.has(m + "," + n)) {
      visited.add(m + "," + n);

      const result = search(board, word, m, n, k + 1, visited);

      if (result) {
        return true;
      } else {
        visited.delete(m + "," + n);
      }
    }
  }

  return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "E", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCESEEEFS";

const res = exist(board, word);
console.log("🚀 ~ res:", res);
