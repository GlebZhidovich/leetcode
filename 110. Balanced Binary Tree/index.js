const ckeckHeight = (node) => {
  if (node === null) return 0;

  const left = ckeckHeight(node.left);
  const right = ckeckHeight(node.right);

  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }

  // height of a node
  return Math.max(left, right) + 1;
};

const isBalanced = (root) => {
  if (root === null) return true;

  return ckeckHeight(root) !== false;
};
