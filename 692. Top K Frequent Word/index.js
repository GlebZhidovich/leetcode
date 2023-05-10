/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const store = {};

  nums.forEach((n) => {
    store[n] ??= 0;
    store[n]++;
  });

  const keys = Object.keys(store);

  const sorted = keys.sort((a, b) => store[b] - store[a]);

  return keys.length <= k ? sorted : sorted.slice(0, k);
};

const words = ["i", "love", "leetcode", "i", "love", "coding"],
  k = 3;

const res = topKFrequent(words, k);
console.log("🚀 ~ file: index.js:29 ~ res:", res);
