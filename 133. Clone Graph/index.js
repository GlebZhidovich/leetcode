/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return node;
  }
  let visited = new Map();
  const first = node.val;
  let next = [node];

  while (next) {
    let newNext = [];

    next.forEach((node) => {
      if (!visited.has(node.val)) {
        visited.set(node.val, new Node(node.val, [...node.neighbors]));
      }

      node.neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor.val)) {
          newNext.push(neighbor);
        }
      });
    });

    next = newNext.length ? newNext : null;
  }

  visited.forEach((node) => {
    for (let index = 0; index < node.neighbors.length; index++) {
      node.neighbors[index] = visited.get(node.neighbors[index].val);
    }
  });

  return visited.get(first);
};
