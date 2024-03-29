function findIndex(n, arr, from, to = arr.length) {
  for (let i = from; i < to; i++) {
    const elem = arr[i];

    if (elem === n) {
      return i;
    }
  }
}

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const postorderLastIdx = postorder.length - 1;
  const rootNum = postorder[postorderLastIdx];
  const root = new TreeNode(rootNum);
  const rootIdx = inorder.findIndex((n) => n === rootNum);
  const stack = [[root, rootIdx, 0, inorder.length]];

  for (let i = postorderLastIdx - 1; i >= 0; i--) {
    const n = postorder[i];
    const node = new TreeNode(n);
    const [rootNode, rootI,] = stack[stack.length - 1];

    let rightI = findIndex(n, inorder, rootI + 1);

    if (!rootNode.left) {
      rightI = findIndex(n, inorder, rootI + 1);
    }

    if (rightI !== undefined) {
      stack[stack.length - 1][0].right = node;
      stack.push([node, rightI]);
      continue;
    }

    const prevRootI = stack[stack.length - 2]?.[1] ?? -1;

    const leftI = findIndex(n, inorder, prevRootI + 1, rootI);

    if (leftI !== undefined) {
      stack[stack.length - 1][0].left = node;
      stack.pop();
      stack.push([node, leftI]);
      continue;
    }

    stack.pop();
    i++;
  }

  return root;
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

buildTree(inorder, postorder);
