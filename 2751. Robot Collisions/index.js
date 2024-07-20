/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
function survivedRobotsHealths(positions, healths, directions) {
  const result = [];

  const robotsL = [];
  const robotsR = [];
  positions.forEach((p, i) => {
    if (directions[i] === "R") {
      robotsL.push([p, healths[i], i]);
    } else {
      robotsR.push([p, healths[i], i]);
    }
  });
  robotsL.sort((a, b) => a[0] - b[0]);
  robotsR.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < robotsR.length; i++) {
    const robotR = robotsR[i];

    if (robotsL.length === 0 || robotR[0] < robotsL[0][0]) {
      result.push(robotR);
    } else {
      let j = getStartIndex(robotsL, robotR);
      for (; j >= 0; j--) {
        const robotL = robotsL[j];

        if (robotL[0] < robotR[0]) {
          if (robotL[1] < robotR[1]) {
            robotR[1]--;
            robotsL.splice(j, 1);
          } else if (robotL[1] > robotR[1]) {
            robotL[1]--;
            break;
          } else {
            robotsL.splice(j, 1);
            break;
          }
        }
      }
      if (j === -1) {
        result.push(robotR);
      }
    }
  }

  return result
    .concat(robotsL)
    .sort((a, b) => a[2] - b[2])
    .map((arr) => arr[1]);
}

function getStartIndex(robotsL, robotR) {
  let r = 0;
  let l = robotsL.length - 1;

  while (l > r) {
    const mid = Math.floor((r + l) / 2);

    if (robotsL[mid][0] > robotR[0]) {
      l = mid;
    } else {
      r = mid + 1;
    }
  }

  return l;
}

const positions = [1, 2, 5, 6],
  healths = [10, 10, 11, 11],
  directions = "RLRL";
survivedRobotsHealths(positions, healths, directions);
