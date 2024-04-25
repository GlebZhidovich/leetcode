/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const result = [];
  const order = [];

  for (let i = 0; i < deck.length; i++) {
    order.push(i);
  }

  let j = 0;

  for (let i = 0; i < deck.length; i++) {
    const n = deck[i];
    const pos = order[j];
    result[pos] = n;
    order.push(order[j + 1]);
    j += 2;
  }

  return result;
};
const deck = [17, 13, 11, 2, 3, 5, 7];
deckRevealedIncreasing(deck);
