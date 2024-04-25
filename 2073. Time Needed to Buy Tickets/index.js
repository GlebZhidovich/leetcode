/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  const kAmount = tickets[k];
  let count = 0;
  for (let i = 0; i < tickets.length; i++) {
    const n = tickets[i];
    const amount = i > k ? kAmount - 1 : kAmount;
    count += Math.min(amount, n);
  }
  return count;
};
// [84,49,5,24,70,77,87,8]
// [84,49,5,24,70,77,87,8]
// [84,49,5,24,70,77,87,8]
// [84,49,5,24,70,77,87,8]
