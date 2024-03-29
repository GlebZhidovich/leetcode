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
var findMode = function (root) {
  const map = {};
  let cur = [root];
  let next = [];
  let max = 0;

  while (cur.length) {
    for (let i = 0; i < cur.length; i++) {
      const node = cur[i];

      map[node.val] ??= 0;
      map[node.val]++;

      max = Math.max(map[node.val], max);

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
  const result = [];

  for (const key in map) {
    if (map[key] === max) {
      result.push(key);
    }
  }

  return result;
};

const root = {
  val: 1,
  left: null,
  right: { val: 2, left: { val: 2, left: null, right: null }, right: null },
};

findMode(root);
