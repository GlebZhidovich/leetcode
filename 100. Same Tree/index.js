/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let cur = [[p, q]];
  let next = [];

  while (cur.length !== 0) {
    for (let i = 0; i < cur.length; i++) {
      const [p, q] = cur[i];

      if (p?.val !== q?.val) {
        return false;
      }

      if (p !== null) {
        next.push([p.left, q.left], [p.right, q.right]);
      }
    }

    cur = next;
    next = [];
  }

  return true;
};
