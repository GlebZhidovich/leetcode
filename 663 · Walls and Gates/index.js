class Solution {
  /**
   * @param rooms: m x n 2D grid
   * @return: nothing
   */
  wallsAndGates(rooms) {
    // write your code here
    const max = 2147483647;
    let queue = [];

    rooms.forEach((arr, i) => {
      arr.forEach((n, j) => {
        if (n == 0) {
          queue.push([i, j]);
        }
      });
    });

    const options = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    let nextQueue = [];
    let count = 1;
    for (let index = 0; index < queue.length; ) {
      const [i, j] = queue[index];

      options.forEach(([a, b]) => {
        const y = i + a;
        const x = j + b;
        if (rooms[y] && rooms[y][x] == max) {
          rooms[y][x] = count;
          nextQueue.push([y, x]);
        }
      });

      if (index == queue.length - 1 && nextQueue.length) {
        index = 0;
        queue = nextQueue;
        nextQueue = [];
        count++;
      } else {
        index++;
      }
    }

    return rooms;
  }
}

const rooms = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

const solution = new Solution();
solution.wallsAndGates(rooms);
