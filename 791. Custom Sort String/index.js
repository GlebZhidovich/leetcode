/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    const l = order[i];
    orderMap.set(l, i);
  }

  const rest = [];

  const sorted = {};
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    if (orderMap.has(l)) {
      const i = orderMap.get(l);
      sorted[i] ??= [];
      sorted[i].push(l);
    } else {
      rest.push(l);
    }
  }

  const main = Object.entries(sorted)
    .sort((a, b) => a[0] - b[0])
    .map((arr) => arr[1].join(""));

  return main.join("") + rest.join("");
};
const order = "cba",
  s = "abcd";
const res = customSortString(order, s);
console.log("🚀 ~ res:", res);
