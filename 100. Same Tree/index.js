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
  if (!q && !p) {
    return true;
  }
  if (q.val !== p.val) {
    return false;
  }
  let cur = [[p], [q]];
  let next = [[], []];

  for (let index = 0; index < cur[0].length; ) {
    const node = cur[0][index];
    const node2 = cur[1][index];

    if (node.left?.val === node2.left?.val) {
      if (node.left) {
        next[0].push(node.left);
        next[1].push(node2.left);
      }
    } else {
      return false;
    }
    if (node.right?.val === node2.right?.val) {
      if (node.right) {
        next[0].push(node.right);
        next[1].push(node2.right);
      }
    } else {
      return false;
    }

    if (index === cur[0].length - 1 && next[0].length) {
      index = 0;
      cur = next;
      next = [[], []];
    } else {
      index++;
    }
  }

  return true;
};
