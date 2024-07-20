/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let waitTime = customers[0][1];
  let curTime = customers[0][0] + customers[0][1];

  for (let index = 1; index < customers.length; index++) {
    const [arrival, time] = customers[index];
    if (arrival > curTime) {
      curTime = arrival + time;
    } else {
      curTime += time;
    }

    waitTime += curTime - arrival;
  }

  return waitTime / customers.length;
};
