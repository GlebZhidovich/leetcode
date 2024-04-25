/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  const result = [];

  const stackA = [];
  const stackB = [];

  for (let i = 0; i < seq.length; i++) {
    const e = seq[i];

    if (e === "(") {
      if (stackA.length <= stackB.length) {
        result.push(0);
        stackA.push(e);
      } else {
        result.push(1);
        stackB.push(e);
      }
    } else {
      if (stackA.length >= stackB.length) {
        result.push(0);
        stackA.pop();
      } else {
        result.push(1);
        stackB.pop();
      }
    }
  }

  return result;
};

// 0 - [((]
// 1 - [((]

// const seq = "(((()))((())))"; //[0,0,1,1,0,0,1,0,0,1,0,0,1,1]
const seq = "(()())";
maxDepthAfterSplit(seq);
// [0,0,1,1]
