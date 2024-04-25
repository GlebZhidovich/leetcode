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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let left = 0;

  if (root.left !== null) {
    if (root.left.left === null && root.left.right === null) {
      left = root.left.val;
    } else {
      left = sumOfLeftLeaves(root.left);
    }
  }

  const right = root.right === null ? 0 : sumOfLeftLeaves(root.right);

  return left + right;
};

const root = {
  val: 3,
  left: {
    val: 9,
    left: { val: 15, left: null, right: null },
    right: { val: 15, left: null, right: null },
  },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: { val: 7, left: null, right: null }, right: null },
  },
};

const res = sumOfLeftLeaves(root);
console.log("🚀 ~ res:", res);
