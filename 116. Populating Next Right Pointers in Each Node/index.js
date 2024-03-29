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
  if (root === null) {
    return root;
  }

  let cur = [root];
  let next = [];

  while (cur.length !== 0) {
    for (let i = 0; i < cur.length; i++) {
      const node = cur[i];
      if (i < cur.length - 1) {
        node.next = cur[i + 1];
      }
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    cur = next;
    next = [];
  }
  return root;
  
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: { val: 8, left: null, right: null, next: null },
      right: { val: 9, left: null, right: null, next: null },
      next: null,
    },
    right: {
      val: 5,
      left: { val: 10, left: null, right: null, next: null },
      right: { val: 11, left: null, right: null, next: null },
      next: null,
    },
    next: null,
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: { val: 12, left: null, right: null, next: null },
      right: { val: 13, left: null, right: null, next: null },
      next: null,
    },
    right: {
      val: 7,
      left: { val: 14, left: null, right: null, next: null },
      right: { val: 15, left: null, right: null, next: null },
      next: null,
    },
    next: null,
  },
  next: null,
};

const res = connect(root);
console.log("🚀 ~ res:", res);
