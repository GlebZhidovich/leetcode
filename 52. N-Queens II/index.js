/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const empty = new Set();
  const filled = new Set();

  for (let s = 0; s < n; s++) {
    for (let m = 0; m < n; m++) {
      empty.add([s, m].join());
    }
  }

  let amount = 0;

  for (const name of empty) {
    const visited = new Set();

    let e = new Set(empty);
    let f = new Set(filled);
    fill(name, empty, filled);

    amount += count(n - 1, e, f, visited);
  }

  return amount; 
};

function count(n, empty, filled, visited) {
  if (n === 0) {
    return 1;
  }

  let amount = 0;

  for (const name of empty) {
    if (!visited.has(name)) {
      empty = new Set(empty);
      filled = new Set(filled);
      fill(name, empty, filled);
      visited.add(name);

      amount += count(n - 1, empty, filled, visited);
    }
  }

  return amount;
}

function fill(name, empty, filled) {
  const [n, m] = name.split(",").map((num) => parseInt(num));

  empty.delete(name);
  filled.add(name);

  const actions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  actions.forEach(([a, b]) => {
    let c = n + a;
    let f = m + b;

    let corsStr = [c, f].join();

    while (empty.has(corsStr) || filled.has(corsStr)) {
      if (empty.has(corsStr)) {
        empty.delete(corsStr);
        filled.add(corsStr);
      }
      c += a;
      f += b;
      corsStr = [c, f].join();
    }
  });
}

const res = totalNQueens(4);
console.log("🚀 ~ res:", res);
