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
 */
var BSTIterator = function (root) {
  const nodes = [];

  function create(root) {
    if (root.left !== null) {
      create(root.left);
    }

    nodes.push(root);

    if (root.right !== null) {
      create(root.right);
    }
  }

  create(root);

  this.nodes = nodes;
  this.index = 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const node = this.nodes[this.index];
  this.index++;
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index !== this.nodes.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
