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
        const neighbors = [];
        const newNode = new Node(node.val, neighbors);
        visited.set(node.val, newNode);

        node.neighbors.forEach((neighbor) => {
          const prev = visited.get(neighbor.val);
          if (prev) {
            prev.neighbors.push(newNode);
            neighbors.push(prev);
          } else {
            newNext.push(neighbor);
          }
        });
      }
    });

    next = newNext.length ? newNext : null;
  }

  return visited.get(first);
};
