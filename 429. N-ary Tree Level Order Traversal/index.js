/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];

  if (root == null) {
    return result;
  }

  let queue = [root];
  let nextQueue = [];

  while (queue.length) {
    result.push([]);
    for (let j = 0; j < queue.length; j++) {
      const node = queue[j];
      result[result.length - 1].push(node.val);

      for (let k = 0; k < node.children.length; k++) {
        const child = node.children[k];
        nextQueue.push(child);
      }
    }

    queue = nextQueue;
    nextQueue = [];
  }

  return result;
};
