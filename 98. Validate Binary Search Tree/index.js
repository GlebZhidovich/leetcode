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
var isValidBST = function (root) {
  function validate(root, min, max) {
    if (root === null) {
      return true;
    }

    if (root.val >= max || root.val <= min) {
      throw new Error();
    }

    return (
      validate(root.left, min, root.val) && validate(root.right, root.val, max)
    );
  }

  try {
    return validate(root, -Infinity, Infinity);
  } catch {
    return false;
  }
};
