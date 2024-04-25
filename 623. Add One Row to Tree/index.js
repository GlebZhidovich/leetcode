function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  let lvl = 1;

  let cur = [root];
  let next = [];

  while (lvl < depth - 1) {
    cur.forEach((node) => {
      [node.left, node.right].forEach((n) => {
        if (n !== null) {
          next.push(n);
        }
      });
    });

    lvl++;
    cur = next;
    next = [];
  }

  cur.forEach((node) => {
    node.left = new TreeNode(val, node.left);
    node.right = new TreeNode(val, null, node.right);
  });

  return root;
};

const root = {
  val: 4,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 1, left: null, right: null },
  },
  right: null,
};

addOneRow(root, 1, 3);
