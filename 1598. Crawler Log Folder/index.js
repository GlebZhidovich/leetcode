/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];

    if (log === "./") {
      continue;
    }

    if (log === "../") {
      stack.pop();
    } else {
      stack.push(log);
    }
  }

  return stack.length;
};
