/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const added = {};

  strs.forEach((str) => {
    const sorted = [...str].sort();
    added[sorted] ??= [];
    added[sorted].push(str);
  });

  return Object.values(added);
};

const res = groupAnagrams([
  "hhhhu",
  "tttti",
  "tttit",
  "hhhuh",
  "hhuhh",
  "tittt",
]);
console.log("🚀 ~ file: index.js:39 ~ res:", res);
