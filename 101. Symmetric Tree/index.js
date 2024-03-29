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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let left = [root.left];
  let right = [root.right];

  let i = 0;

  if (root.left === null && root.right === null) {
    return true;
  }

  while (left[i]?.val === right[i]?.val) {
    if (left[i] === undefined) {
      return true;
    }

    if (left[i] !== null) {
      left.push(left[i].left, left[i].right);
      right.push(right[i].right, right[i].left);
    }

    i++;
  }

  return false;
};
