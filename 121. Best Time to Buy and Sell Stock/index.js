/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let index = 0; index < prices.length; index++) {
    const price = prices[index];
    if (price < min) {
      min = price;
    } else {
      max = Math.max(max, price - min);
    }
  }

  return max;
};
