/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  root.depth = 0;
  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      node.left.depth = node.depth + 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.depth = node.depth + 1;
      queue.push(node.right);
    }

    if (queue[0] && queue[0].depth === node.depth) {
      node.next = queue[0];
    } else {
      node.next = null;
    }
  }

  return root;
};
