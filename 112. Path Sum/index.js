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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }

  let cur = [[0, root]];
  let next = [];

  let i = 0;

  while (cur.length > 0) {
    const [prevSum, node] = cur[i];
    const sum = prevSum + node.val;

    if (node.left === null && node.right === null && sum === targetSum) {
      return true;
    }

    if (node.left !== null) {
      next.push([sum, node.left]);
    }

    if (node.right !== null) {
      next.push([sum, node.right]);
    }

    if (i === cur.length - 1) {
      i = 0;
      cur = next;
      next = [];
    } else {
      i++;
    }
  }

  return false;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(-2, null, new TreeNode(-3));

const result = hasPathSum(root, -5);
console.log("🚀 ~ result:", result);
