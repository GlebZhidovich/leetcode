/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  let idx = 0;

  for (let index = 1; index < intervals.length; index++) {
    const arr = intervals[index];
    if (result[idx][1] >= arr[0]) {
      if (result[idx][1] < arr[1]) {
        result[idx][1] = arr[1];
      }
    } else {
      idx++;
      result[idx] = arr;
    }
  }

  return result;
};
