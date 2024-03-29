function binarySearch(intervals, n) {
  let l = 0,
    r = intervals.length - 1;

  while (r > l) {
    const m = Math.floor((r + l) / 2);

    if (n > intervals[m][0]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  if (intervals[0][0] >= newInterval[1]) {
    if (intervals[0][0] === newInterval[1]) {
      intervals[0][0] = newInterval[0];
    } else {
      intervals.unshift(newInterval);
    }

    return intervals;
  }

  if (intervals[intervals.length - 1][1] <= newInterval[0]) {
    if (intervals[intervals.length - 1][1] === newInterval[0]) {
      intervals[intervals.length - 1][1] = newInterval[1];
    } else {
      intervals.push(newInterval);
    }

    return intervals;
  }

  const [l, r] = newInterval;

  let lIdx = binarySearch(intervals, l);
  let rIdx = binarySearch(intervals, r);

  if (intervals[lIdx - 1] && intervals[lIdx - 1][1] >= l) {
    lIdx--;
  }

  if (intervals[rIdx - 1] && intervals[rIdx][0] > r) {
    rIdx--;
  }

  const min = Math.min(...intervals[lIdx], l);
  const max = Math.max(...intervals[rIdx], r);

  intervals.splice(lIdx, rIdx - lIdx + 1, [min, max]);

  return intervals;
};
const intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];
// const intervals = [
//     [0, 5],
//     [9, 12],
//   ],
//   newInterval = [7, 16];
// const intervals = [
//     [1, 3],
//     [6, 9],
//   ],
//   newInterval = [2, 5];
const res = insert(intervals, newInterval);
console.log("🚀 ~ res:", res);
