/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let amount = 0;

  let min = prices[0];
  let prev = prices[0];

  for (let index = 1; index < prices.length; index++) {
    const val = prices[index];

    if (prev > val) {
      amount += prev - min;
      min = val;
    } else if (prices.length - 1 === index) {
      amount += val - min;
    }

    prev = val;
  }

  return amount;
};

const res = maxProfit([1, 2, 3, 4, 5]);
console.log("🚀 ~ file: index.js:23 ~ res:", res);
