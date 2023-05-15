/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set([0]);
  let queue = [...rooms[0]];
  let next = [];
  let index = 0;

  while (queue.length) {
    const n = queue[index];

    if (!visited.has(n)) {
      visited.add(n);

      rooms[n].forEach((num) => {
        if (typeof num === "number" && !visited.has(num)) {
          next.push(num);
        }
      });
    }

    if (index === queue.length - 1) {
      queue = next;
      next = [];
      index = 0;
    } else {
      index++;
    }
  }

  return visited.size === rooms.length;
};
