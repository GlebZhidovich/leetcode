function isSymmetric(root) {
  if (!root.left && !root.right) {
    return true;
  }

  let tree = [[[root.left], [root.right]]];

  for (let index = 0; index < tree.length; ) {
    const [left, right] = tree[index];
    if (left.length != right.length) {
      return false;
    }
    const res = [[], []];

    let nullCount = 0;

    for (let j = 0; j < left.length; j++) {
      const lVal = left[j];
      let rVal = right[right.length - 1 - j];
      if (lVal?.val != rVal?.val) {
        return false;
      }
      rVal = right[j];
      [lVal, rVal].forEach((node, i) => {
        if (node) {
          if (!node.left && i == 0) {
            nullCount++;
          }
          if (!node.right && i == 0) {
            nullCount++;
          }
          res[i].push(node.left);
          res[i].push(node.right);
        }
      });
    }
    if (res[0].length != nullCount) {
      tree[index] = res;
    } else {
      tree = 0;
    }
  }
  return true;
}
