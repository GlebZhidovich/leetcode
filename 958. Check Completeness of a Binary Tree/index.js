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
var isCompleteTree = function (root) {
  let storage = [root];
  let next = true;
  let nextStorage = [];
  for (let index = 0; index < storage.length; index++) {
    const node = storage[index];

    if (!node.left && node.right) {
      return false;
    } else if (node.left && !node.right) {
      if (next) {
        nextStorage.push(node.left);
        next = false;
      } else {
        return false;
      }
    } else if (!node.left && !node.right) {
      next = false;
    } else {
      if (next) {
        nextStorage.push(node.left, node.right);
      } else {
        return false;
      }
    }

    if (index == storage.length - 1 && nextStorage.length) {
      next = true;
      storage = nextStorage;
      nextStorage = [];
      index = -1;
    }
  }
  return true;
};

