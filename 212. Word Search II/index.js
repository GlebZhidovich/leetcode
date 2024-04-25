/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Tree {
  constructor() {
    this.childrens = new Map();
    this.word = null;
  }

  addChild(l) {
    if (this.childrens.has(l)) {
      return this.childrens.get(l);
    } else {
      const newTree = new Tree();
      this.childrens.set(l, newTree);
      return newTree;
    }
  }

  addWord(word) {
    let tree = this;
    for (const l of word) {
      tree = tree.addChild(l);
    }
    tree.word = word;
  }

  isValidCoordinates(x, y, m, n) {
    return x < 0 || y < 0 || x >= m || y >= n;
  }

  search(board, l, x, y, m, n, res) {
    let node = this.childrens.get(l);
    if (this.isValidCoordinates(x, y, m, n) || !node) return;
    if (!node.childrens.size && !node.word) {
      this.childrens.delete(l);
      return;
    }
    if (node.word) {
      res.push(node.word);
      node.word = null;
      if (!node.childrens.size) return;
    }
    const currentLetter = board[x][y];
    board[x][y] = "$";
    node.search(board, board[x - 1]?.[y], x - 1, y, m, n, res);
    node.search(board, board[x + 1]?.[y], x + 1, y, m, n, res);
    node.search(board, board[x][y - 1], x, y - 1, m, n, res);
    node.search(board, board[x][y + 1], x, y + 1, m, n, res);
    board[x][y] = currentLetter;
  }
}

var findWords = function (board, words) {
  const m = board.length,
    n = board[0].length;
  const tree = new Tree(),
    res = [];
  for (const word of words) {
    tree.addWord(word);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      tree.search(board, board[i][j], i, j, m, n, res);
    }
  }

  return res;
};
