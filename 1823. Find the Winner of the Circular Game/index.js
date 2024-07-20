/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function findTheWinner(n, k) {
  const queue = new Array(n).fill(1).map((n, i) => n + i);

  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue[0];
}

findTheWinner(5, 2);
