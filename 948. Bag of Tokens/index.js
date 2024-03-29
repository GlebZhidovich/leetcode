/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  let score = 0;
  tokens.sort((a, b) => a - b);

  for (let i = 0, j = tokens.length; i < j; i++) {
    const n = tokens[i];
    if (power - n >= 0) {
      power -= n;
      score++;
    } else if (score > 0) {
      if (j - 1 !== i) {
        const m = tokens[j - 1];

        if (power + m - n >= 0) {
          power += m - n;
          j--
        }
      }
    }
  }

  return score;
};

const tokens = [91, 4, 75, 70, 66, 71, 91, 64, 37, 54];
const power = 20;
const res = bagOfTokensScore(tokens, power);
