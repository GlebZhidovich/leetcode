/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];

  if (root == null) {
    return result;
  }

  function preorder(root) {
    result.push(root.val);

    for (let i = 0; i < root.children.length; i++) {
      const element = root.children[i];
      preorder(element);
    }
  }

  preorder(root);
  return result;
};

const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};
