/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
  let result = numBottles;

  while (numBottles >= numExchange) {
    const rest = Math.floor(numBottles / numExchange);
    result += rest;
    numBottles = numBottles - rest * numExchange + rest;
  }

  return result;
}

numWaterBottles(9, 3);
