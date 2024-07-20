/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
function passThePillow(n, time) {
  let isForward = true;
  let j = 1;
  for (let index = 0; index < time; index++) {
    j += isForward ? 1 : -1;
    if (j === n) {
      isForward = false;
    }
    if (j === 1) {
      isForward = true;
    }
  }
  return j;
}
