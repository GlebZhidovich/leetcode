/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const result = [];

  for (let i = 0; i < buildings.length; i++) {
    const [l, r, h] = buildings[i];

    if (result.length === 0) {
      result.push([l, h], [r, 0]);
    } else {
      for (let j = result.length - 1; j >= 0; j--) {
        const [a, b] = result[j];
      }
    }
  }

  return result;
};
