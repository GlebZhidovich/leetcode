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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  if (!root) {
    return result;
  }
  const stack = [root];
  const visited = new Set([null, undefined]);

  while (stack.length) {
    const { val, left, right } = stack.at(-1);

    if ([left, right].every((node) => node === null)) {
      result.push(val);
      visited.add(stack.pop());
    } else if (!visited.has(left)) {
      stack.push(left);
    } else {
      result.push(val);

      visited.add(stack.pop());
      if (!visited.has(right)) {
        stack.push(right);
      }
    }
  }

  return result;
};

const root = new TreeNode(2, new TreeNode(3, new TreeNode(1)));

const res = inorderTraversal(root);
console.log("🚀 ~ file: index.js:51 ~ res:", res);
