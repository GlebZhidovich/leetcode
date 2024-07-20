/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const stack = [];

  combinations(n, k, 1, stack, result);

  return result;
};

function combinations(n, k, prev, stack, result) {
  if (stack.length === k) {
    result.push(stack.slice());
    return;
  }

  for (let i = prev; i <= n; i++) {
    stack.push(i);
    combinations(n, k, i + 1, stack, result);
    stack.pop();
  }
}
