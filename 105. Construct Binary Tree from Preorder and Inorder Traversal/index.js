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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const rootNum = preorder[0];
  const root = new TreeNode(rootNum);
  const rootIdx = inorder.findIndex((n) => n === rootNum);
  const stack = [[root, rootIdx, 0, preorder.length]];

  for (let i = 1; i < preorder.length; i++) {
    const n = preorder[i];
    const node = new TreeNode(n);
    const [rootNode, rootI, from, to] = stack[stack.length - 1];

    if (!rootNode.left) {
      let leftI;

      for (let i = from; i < rootI; i++) {
        if (inorder[i] === n) {
          leftI = i;
        }
      }

      if (leftI !== undefined) {
        stack[stack.length - 1][0].left = node;
        stack.push([node, leftI, from, rootI]);
        continue;
      }
    }

    if (!rootNode.right) {
      let rightI;

      for (let i = rootI + 1; i < to; i++) {
        if (inorder[i] === n) {
          rightI = i;
        }
      }

      if (rightI !== undefined) {
        stack[stack.length - 1][0].right = node;
        stack.push([node, rightI, rootI, to]);
        continue;
      }
    }

    stack.pop();
    i--;
  }

  return root;
};

const preorder = [3, 1, 2, 4];
const inorder = [1, 2, 3, 4];
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];

buildTree(preorder, inorder);
