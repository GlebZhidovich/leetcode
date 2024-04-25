/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  const arr = [0, 0];

  for (let i = 0; i < board.length; i++) {
    const str = board[i];
    for (let j = 0; j < str.length; j++) {
      const element = str[j];
      if (element === "O") {
        arr[0]++;
      }
      if (element === "X") {
        arr[1]++;
      }
    }
  }

  let isValid = arr[0] === arr[1] || arr[0] === arr[1] - 1;

  if (!isValid) {
    return false;
  }

  const cors = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
  ];

  let cros = 0;
  let zero = 0;

  for (let i = 0; i < cors.length; i++) {
    const arr = cors[i];

    ["O", "X"].forEach((elem, i) => {
      const res = arr.every(([a, b]) => board[a][b] === elem);
      if (res) {
        if (i === 0) {
          zero++;
        } else {
          cros++;
        }
      }
    });

    if (cros > 0 && zero > 0) {
      return false;
    }
  }

  return true;
};
[
    "XXX",
    "XOO",
    "OO "]
