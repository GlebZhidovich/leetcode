/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const tree = new Map();

  words.forEach((word, index) => {
    let t = tree;
    for (let i = 0; i < word.length; i++) {
      const l = word[i];
      if (!t.has(l)) {
        t.set(l, new Map());
      }

      t = t.get(l);
    }
    t.set("word", [word, index]);
  });

  const result = [];
  const visited = new Set();
  words.forEach((word, wordIndex) => {
    visited.add(wordIndex + "," + wordIndex);
    for (let i = 0; i < word.length; i++) {
      let t = tree;
      const options = [];

      if (t.has("word")) {
        options.push(t.get("word"));
      }

      for (let j = word.length - 1 - i; j >= 0; j--) {
        const char = word[j];

        if (t.has(char)) {
          t = t.get(char);

          if (t.has("word")) {
            options.push(t.get("word"));
          }
        } else {
          break;
        }
      }

      options.forEach((w) => {
        const pos1 = [wordIndex, w[1]];
        const pos2 = [w[1], wordIndex];

        [
          [pos1, [word, w[0]]],
          [pos2, [w[0], word]],
        ].forEach(([pos, words]) => {
          const posStr = pos.join();

          if (!visited.has(posStr)) {
            const word = words[0] + words[1];
            let isPol = true;
            for (let i = 0; i < Math.floor(word.length / 2); i++) {
              const char = word[i];
              const char2 = word[word.length - 1 - i];
              if (char !== char2) {
                isPol = false;
                break;
              }
            }

            if (isPol) {
              visited.add(posStr);
              result.push(pos);
            }
          }
        });
      });
    }
  });

  return result;
};
const words = ["a","b","c","ab","ac","aa"];
const res = palindromePairs(words);
console.log("🚀 ~ res:", res);
// ["a","b","c","ab","ac","aa"] [[3,0],[1,3],[4,0],[2,4],[5,0],[0,5]]
// ["a","aa","aaa"]  [[1,0],[0,1],[2,0],[1,2],[2,1],[0,2]]
// ["ab","ba","abc","cba"]   [[0,1],[1,0],[2,1],[2,3],[0,3],[3,2]]
