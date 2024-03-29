/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let max = dictionary[0].length,
    min = dictionary[0].length;
  const dictionarySet = new Set();

  dictionary.forEach((root) => {
    max = Math.max(root.length, max);
    min = Math.min(root.length, min);
    dictionarySet.add(root);
  });

  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length >= min) {
      for (let j = min; j <= Math.min(word.length, max); j++) {
        const w = word.slice(0, j);
        if (dictionarySet.has(w)) {
          words[i] = w;
          break;
        }
      }
    }
  }

  return words.join(" ");
};

const dictionary = ["a", "aa", "aaa", "aaaa"],
  sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa";
const res = replaceWords(dictionary, sentence);
console.log("🚀 ~ res:", res);
