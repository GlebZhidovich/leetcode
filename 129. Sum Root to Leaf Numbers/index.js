var sumNumbers = function (root, prev = []) {
  const sum = prev + root.val;
  if (root.left && root.right) {
    return (
      parseInt(sumNumbers(root.left, sum)) +
      parseInt(sumNumbers(root.right, sum))
    );
  }

  if (root.left) {
    return sumNumbers(root.left, sum);
  }
  if (root.right) {
    return sumNumbers(root.right, sum);
  }

  return sum;
};
