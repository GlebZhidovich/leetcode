function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
function createBinaryTree(descriptions) {
  const map = new Map();
  const children = new Set();

  descriptions.forEach(([parent, child, side]) => {
    let pNode;
    let cNode;
    children.add(child);

    if (map.has(parent)) {
      pNode = map.get(parent);
    } else {
      pNode = new TreeNode(parent);
      map.set(parent, pNode);
    }

    if (map.has(child)) {
      cNode = map.get(child);
    } else {
      cNode = new TreeNode(child);
      map.set(child, cNode);
    }

    if (side === 1) {
      pNode.left = cNode;
    } else {
      pNode.right = cNode;
    }
  });

  const root = descriptions.find((arr) => !children.has(arr[0]));

  return map.get(root[0]);
}

createBinaryTree([
  [20, 15, 1],
  [20, 17, 0],
  [50, 20, 1],
  [50, 80, 0],
  [80, 19, 1],
]);
