/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root, lvl = 1) {
  if (root == null) {
    return 0;
  }

  let max = lvl;

  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i];
    max = Math.max(max, maxDepth(child, lvl + 1));
  }

  return max;
};
