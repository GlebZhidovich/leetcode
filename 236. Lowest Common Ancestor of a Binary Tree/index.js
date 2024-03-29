/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
};

const q = {
  val: 4,
  left: null,
  right: null,
};

const p = {
  val: 5,
  left: {
    val: 6,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: q,
  },
};

const root = {
  val: 3,
  left: p,
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

const res = lowestCommonAncestor(root, p, q);
console.log("🚀 ~ res:", res);
