/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];

  if (root == null) {
    return result;
  }

  function postorder(root) {
    for (let i = 0; i < root.children.length; i++) {
      const child = root.children[i];
      postorder(child);
    }

    result.push(root.val);
  }

  postorder(root);

  return result;
};
